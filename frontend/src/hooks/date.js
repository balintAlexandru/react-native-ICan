const getOrdinalSuffix = number => {
  const specialCases = [11, 12, 13];

  if (specialCases.includes(number % 100)) {
    return 'th';
  }

  switch (number % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const getCurrentDate = () => {
  const currentDate = new Date();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = daysOfWeek[currentDate.getDay()];
  const dayNumber =
    currentDate.getDate() + getOrdinalSuffix(currentDate.getDate());
  const currentMonth = monthNames[currentDate.getMonth()];
  return {day, dayNumber, currentMonth};
};

export default getCurrentDate;
