import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <div className="responsive-container">
      <h1 className="heading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="icon success" />
        <div className="text-container">
          <h1 className="notification-title success">Success</h1>
          <p className="notification-description">
            You can access all the files in the folder
          </p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="icon error" />
        <div className="text-container">
          <h1 className="notification-title error">Error</h1>
          <p className="notification-description">
            Sorry, you are not authorized to have access to delete the file
          </p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="icon warning" />
        <div className="text-container">
          <h1 className="notification-title warning">Warning</h1>
          <p className="notification-description">
            Viewers of this file can see comments and suggestions
          </p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="icon info" />
        <div className="text-container">
          <h1 className="notification-title info">Info</h1>
          <p className="notification-description">
            Anyone on the internet can view these files
          </p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
