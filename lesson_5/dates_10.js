let today = new Date();
let nextWeek = new Date(today.getTime());

console.log(today === nextWeek);

console.log(today.toDateString());
console.log(nextWeek.toDateString());

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(nextWeek.toDateString());
