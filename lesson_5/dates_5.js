let today = new Date();
let dayOfWeek = today.getDay();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayOfMonth = today.getDate();

function getSuffix(dayOfMonth) {
  if (dayOfMonth >= 4 && dayOfMonth <= 21) {
    return 'th';
  } else if (dayOfMonth >= 24 && dayOfMonth <= 30) {
    return 'th';
  } else if (String(dayOfMonth).endsWith('1')) {
    return 'st';
  } else if (String(dayOfMonth).endsWith('2')) {
    return 'nd';
  } else {
    return 'rd';
  }
}

let suffix = getSuffix(dayOfMonth);
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month = months[today.getMonth()];

let string = `Today's date is ${daysOfWeek[dayOfWeek]}, ${month} \
${dayOfMonth}${suffix}`


console.log(string);
