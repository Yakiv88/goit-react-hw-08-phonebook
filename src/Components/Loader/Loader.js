import { ImSpinner3 } from 'react-icons/im'

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
}

function Loader() {
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner3 size="32" className="icon-spin" />
        Loading...
      </div>
    </div>
  )
}

export default Loader
