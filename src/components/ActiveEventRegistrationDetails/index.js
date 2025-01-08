// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {active} = props
  const renderYetToRegister = () => (
    <div className="yetToRegister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="yetToRegisterImage"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        height="100px"
        width="100px"
        alt="registered"
      />
      <h3>You have already registered for the event</h3>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="registrationsClosed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        height="100px"
        width="100px"
        className="registrations-closed-image"
        alt="registrations closed"
      />
      <h3>Registrations Are closed Now!</h3>
      <p style={{marginTop: '1px'}}>Stay tuned. We will reopen</p>
    </div>
  )

  const defaultView = () => (
    <div className="default-view-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const renderActiveEvent = () => {
    switch (active) {
      case 'YET_TO_REGISTER':
        return renderYetToRegister()
      case 'REGISTERED':
        return renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosed()
      case 'INITIAL':
        return defaultView()

      default:
        return null
    }
  }

  return renderActiveEvent()
}
export default ActiveEventRegistrationDetails
