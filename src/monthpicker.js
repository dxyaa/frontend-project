import React, { useState } from 'react';

const MonthPicker = ({ selectedMonth, onMonthChange }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  return (
    <div className="relative ">
      <select
        value={selectedMonth}
        onChange={(e) => onMonthChange(e.target.value)}
        className="appearance-none border rounded-lg  w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        {months.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" class="h-4 w-3">
        </img>
      </div>
    </div>
  );
};

export default MonthPicker;
