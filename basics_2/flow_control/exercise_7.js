function upcaseLongString(str) {
  if (str.length >= 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(upcaseLongString('hello world'));
console.log(upcaseLongString('goodbye'));
