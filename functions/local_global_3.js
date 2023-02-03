var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*
The above will log 'This is local'. The global `myVar` variable declared on line
1 is available throughout the program. Therefore when we invoke someFunction(),
the myVar variable gets re-assigned to the string 'This is local' and this is what
is logged on line 8.
*/
