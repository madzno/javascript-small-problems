let today = new Date();
let dayOfWeek = today.getDay();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayOfMonth = today.getDate();

let string = `Today's date is ${daysOfWeek[dayOfWeek]}, the ${dayOfMonth}`


console.log(string);
