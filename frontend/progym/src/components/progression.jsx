import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const MyFullCalendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2024-09-01' },
        { title: 'Event 2', date: '2024-09-07' },
      ]}
    />
  );
};

export default MyFullCalendar;
