let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // 7

/*
The code above logs 7. On line 1 we declare the variable a and initialize it to 7, a
primitive value.
On line 7 we invoke the myValue function and pass a as an argument. myValue is defined
with a parameter b, b gets initialized to a number with the value 7 but this number
is a different number in memory than the number 7 that a is assigned to. Therefore,
any operations inside the myValue function do not have any affect on the value assigned
to a.
*/
