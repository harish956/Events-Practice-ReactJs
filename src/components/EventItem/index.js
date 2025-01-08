// Write your code here
import './index.css'

const EventItem = props => {
  const {event, onStatusChange} = props
  const {imageUrl, name, location, registrationStatus} = event

  const changeStatus = () => {
    onStatusChange(registrationStatus)
  }

  return (
    <li className="eventItem-container">
      <button type="button" className="image-button" onClick={changeStatus}>
        <img src={imageUrl} alt="event" height="230px" width="350px" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
