let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/*
Above logs 7 to the console.
On line 1 we declare and initialize a global variable a to 7.
On lien 7 we invoke the myValue function and pass 7 as an argument. myValue is defined
with a parameter a that is initilaized to 7 but this is a different number in memory
than the 7 that a references since 7 is a primitive value. Additionally, a is defined
as a local variable to the myValue function and shadows or "hides" the globally scoped
a declared on line 1. Thus on line 4 we increment the locally scoped 'a' variable by 10
but this action has *no effect* on the globally scoped a variable. Thus when we log
the value of a on line 8 this outputs 7.
*/
