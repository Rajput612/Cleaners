import { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

// Dummy data for previous bookings
const dummyEvents = [
  {
    title: 'House Cleaning',
    start: new Date(2024, 1, 15),
    end: new Date(2024, 1, 15),
    allDay: true,
    frequency: 'weekly'
  },
  {
    title: 'Garden Maintenance',
    start: new Date(2024, 1, 20),
    end: new Date(2024, 1, 20),
    allDay: true,
    frequency: 'monthly'
  },
  {
    title: 'Personal Chef',
    start: new Date(2024, 1, 25),
    end: new Date(2024, 1, 25),
    allDay: true,
    frequency: 'one-time'
  }
];

export default function Calendar() {
  const [events] = useState(dummyEvents);

  const eventStyleGetter = (event: any) => {
    let backgroundColor = '#3182ce';
    switch (event.frequency) {
      case 'weekly':
        backgroundColor = '#2c7a7b';
        break;
      case 'monthly':
        backgroundColor = '#805ad5';
        break;
      case 'quarterly':
        backgroundColor = '#c05621';
        break;
      case 'yearly':
        backgroundColor = '#805ad5';
        break;
    }
    return {
      style: {
        backgroundColor,
        borderRadius: '5px',
      }
    };
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <div style={{ height: '500px' }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
}