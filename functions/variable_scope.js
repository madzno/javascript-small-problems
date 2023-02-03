function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // 'This is global'

/*
The above will log 'This is global' to the console. When we invoke someFunction()
on line 5, the variable myVar is assigned to 'This is global'. Since myVar is
not declared, it becomes a "property" of the global object an dis therefore
available throughout our program.
*/
