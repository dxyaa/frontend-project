import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-64">
      <DatePicker
      showIcon
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        isClearable
        className="w-full p-2 border border-gray-300 rounded-md bg-white"
      />
      <span className="absolute right-2 top-2 text-gray-500 bg-white">
        <i className="far fa-calendar-alt bg-white"></i>
      </span>
    </div>
  );
}

function App() {
  return (
    <div className="">
      <MyDatePicker />
    </div>
  );
}

export default App;
