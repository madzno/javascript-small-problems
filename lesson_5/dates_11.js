function formatTime(date) {
  let hoursString = String(date.getHours());
  let minutesString = String(date.getMinutes());

  if (hoursString.length === 1) {
    hoursString = '0' + hoursString;
  } else if (minutesString.length === 1) {
    minutesString = '0' + minutesString;
  }

  return hoursString + ':' + minutesString;
}

let today = new Date();
console.log(formatTime(today));
