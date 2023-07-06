// What is the code below going to output?
alert( null || 2 || undefined );
//2

// What will the code below output?
alert( alert(1) || 2 || alert(3) );
//2,1. alert() does not output a value, 
//so the operation ends after the first truthy value '2'.

//What is this code going to show?
alert( 1 && null && 2 );
//Output Null, as operator evaluates the first Falsy statement.

//What will this code show?
alert( alert(1) && alert(2) );
//1, Undefined.

//What will the result be?
alert( null || 2 && 3 || 4 );
//3
