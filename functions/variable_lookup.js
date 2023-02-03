var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*
This code will log 'This is global' to the console. On line 1 we declare and initilaize
a variable myVar to the string 'This is global'. On line 7 we invoke someFUnction()
which logs the value of myVar to the screen; 'This is global'. MyVar is available
inside someFunciton() because variables with globalscope can be accessed inside an
inner scope
*/
