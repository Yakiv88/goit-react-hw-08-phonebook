// import { Navigate } from "react-router-dom";
import { Navigate } from 'react-router'
export default function PublicRoute({
  isLoggedIn,
  component: Component,
  restricted = false,
  redirectTo,
}) {
  const shouldRedirect = isLoggedIn && restricted

  return (
    <>{shouldRedirect ? <Navigate to={'/contacts' || '/'} /> : <Component />}</>
  )
}
