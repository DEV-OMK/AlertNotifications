import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification-card">
      {children}
      <GrFormClose className="cross-icon" />
    </div>
  )
}

export default Notification
