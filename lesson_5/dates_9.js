function formattedDayofMonth(date) {
  let dayOfMonth = date.getDate();

  if (dayOfMonth >= 4 && dayOfMonth <= 21) {
    return dayOfMonth + 'th';
  } else if (dayOfMonth >= 24 && dayOfMonth <= 30) {
    return dayOfMonth + 'th';
  } else if (String(dayOfMonth).endsWith('1')) {
    return dayofMonth + 'st';
  } else if (String(dayOfMonth).endsWith('2')) {
    return dayOfMonth + 'nd';
  } else {
    return dayofMonth + 'rd';
  }
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'];

  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let dayofTheWeek = formattedDay(date);
  let month = formattedMonth(date);
  let dayofTheMonth = formattedDayofMonth(date);

  console.log(`Today's date is ${dayofTheWeek} ${month} ${dayofTheMonth}`)
}

let today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);
