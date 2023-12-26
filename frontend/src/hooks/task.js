const convertTimeStringToMinutes = timeString => {
  const timeArray = timeString.split(' ');
  let totalMinutes = 0;

  for (let i = 0; i < timeArray.length; i += 2) {
    const value = parseInt(timeArray[i]);
    const unit = timeArray[i + 1];

    if (unit === 'hour' || unit === 'hours') {
      totalMinutes += value * 60;
    } else if (unit === 'minute' || unit === 'minutes') {
      totalMinutes += value;
    }
  }

  return totalMinutes;
};

const convertMinutesToHoursAndMinutes = totalMinutes => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return [hours, minutes];
};

export {convertTimeStringToMinutes, convertMinutesToHoursAndMinutes};
