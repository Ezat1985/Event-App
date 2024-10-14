import { MdDeleteForever } from "react-icons/md";
const Event = ({ img, id, text, date, deleteEvent }) => {
  return (
    <div className="event">
      <span>{text}</span>
      <div className="event-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => deleteEvent(id)}
          className="delete-icon"
          size={20}
        />
      </div>
    </div>
  );
};

export default Event;
