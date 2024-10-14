import AddEvent from "./AddEvent"
import Event from "./Event"

const EventList = ({events ,handelAddEvent,deleteEvent}) => {
    return (
        <div className="events-list">
            {events.map((event)=>(<Event id={event.id} text={event.text} date= {event.date} deleteEvent= {deleteEvent} />))}
            <AddEvent handelAddEvent= {handelAddEvent} />
         
        </div>
    )
}

export default EventList
