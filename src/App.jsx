import { useEffect, useState } from "react";
import EventList from "./component/EventList";
import { nanoid } from "nanoid";
import Search from "./component/Search";

const App = () => {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const savedEvents = JSON.parse(
      localStorage.getItem("react-notes-app-data")
    );

    if (savedEvents) {
      setEvents(savedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(events));
  }, [events]);
  const addEvent = (text) => {
    //console.log(text)
    const date = new Date();
    const newEvent = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newEvents = [...events, newEvent];
    setEvents(newEvents);
    console.log(newEvents);
  };
  const deleteEvent = (id) => {
    const newEvent = events.filter((event) => event.id !== id);
    setEvents(newEvent);
  };
  return (
    <div className="container">
      <Search handelSearchEvent={setSearchText} />
      <h1>Events</h1>
      <EventList
        events={events.filter((event) =>
          event.text.toLowerCase().includes(searchText)
        )}
        handelAddEvent={addEvent}
        deleteEvent={deleteEvent}
      />
    </div>
  );
};

export default App;
