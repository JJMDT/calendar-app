import { Navbar, CalendarEvent } from "../";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../../herpers";

const events = [
  {
    title: "Cumpleaños",
    notes: "comprar pastel",
    start: new Date(),
    end: addHours(new Date(), 0.1),
    bgColor: "red",
    user: {
      name: "juan",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "orange",
      borderRadius: "0px",
      color: "white",
    };

    return { style };
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
