import { Navbar, CalendarEvent, CalendarModal } from "../";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../../herpers";
import { useState } from "react";

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
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week",
  );

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "orange",
      borderRadius: "0px",
      color: "white",
    };

    return { style };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChanged = (event) => {
    console.log({ viewChange: event });
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  );
};
