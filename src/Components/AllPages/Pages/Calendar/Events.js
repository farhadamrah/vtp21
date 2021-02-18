import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Button, DatePicker, Input, message } from 'antd';
import './events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (moment, dateString) => {
    setDate(dateString);
  };

  const onSubmitEvent = () => {
    if (title && date) {
      const newEvents = [...events, { title, date }];
      setEvents(newEvents);
      setTitle('');
    } else {
      message.error('Please enter valid informations');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label
          htmlFor="titleInput"
          style={{ fontSize: '20px', color: 'white' }}
        >
          Title
        </label>
        <Input
          placeholder="Event title"
          onChange={handleChange}
          id="titleInput"
          style={{ width: '500px', margin: '0 20px' }}
          value={title}
        />
        <DatePicker onChange={handleDateChange} placeholder="Event date" />
        <Button
          type="primary"
          style={{
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '20px',
          }}
          onClick={onSubmitEvent}
        >
          Add event
        </Button>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </>
  );
};

export default Events;
