import s from './App.module.css'
import ContactForm from '../views/ContactForm/ContactForm'
import { Route, Routes } from 'react-router-dom'
import HomeView from '../views/HomeView/HomeView'
import LoginView from '../views/LoginView/LoginView'
import RegisterView from '../views/RegisterView/RegisterView'
import MenuAppBar from '../Components/AppBar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from '../redux/auth/auth-operations'
import PrivateRoute from '../Components/PrivateRoute'
import { useSelector } from 'react-redux'
import authSelectors from '../redux/auth/auth-selectors'
import PublicRoute from '../Components/PublicRoute'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import Loader from '../Components/Loader/Loader'
import { Suspense } from 'react'

function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrentUser,
  )

  const token = useSelector(authSelectors.getToken)
  useEffect(() => {
    token && dispatch(authOperations.refreshCurrentUser())
  }, [dispatch, token])

  return (
    <div className={s.App}>
      {!isRefreshingCurrentUser ? (
        <>
          <MenuAppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute isLoggedIn={isLoggedIn} component={HomeView} />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    isLoggedIn={isLoggedIn}
                    component={RegisterView}
                    restricted
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute
                    isLoggedIn={isLoggedIn}
                    component={LoginView}
                    redirectTo="/contacts"
                    restricted
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    isLoggedIn={isLoggedIn}
                    component={ContactForm}
                  />
                }
              />
            </Routes>
          </Suspense>
        </>
      ) : (
        <Loader />
      )}

      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
