// Hoisting : a variable can be declared afterit has been used.Avariable can be usedbefore it can be declared .
// Variable declaratons are scanned and are made undefined.
//Function declaration are scanned and are made available.

/*getName();
console.log(x);
console.log(getName);

var x=7;
function getName()
{
    console.log("Its hoisting");
}*/

// var,let,const:
/*var a;
a=10;
console.log(a);

var a=20;
console.log(a);*/

/*let b;
b=10;
console.log(b);

let b=20;
console.log(b);*/


/*const c;
c=10;
console.log(c);

const c=10;
console.log(c);*/


/* Function declaration : Function declarations are when you create a function and give it a name.
 You declare the name of the function when you write the function keyword, followed by the function name.*/

/*function oddeven(a)
 {
    if(a%2==0)
    {
        return "even";
    }
    else 
    {
        return "odd";
    }
 }

 a=oddeven(4);
 console.log(a);*/


 /*Function Expression: Function expressions are when you create a function and assign it to a variable.
  The function is anonymous, which means it doesn’t have a name.*/ 

 /*let func= function (a)
 {
    if(a%2==0)
    {
         return "even";
    }
    else 
    {
        return "odd";
    }
}
let b=func(4);
console.log(b);
*/

/*1)Function declarations are hoisted, while function expressions are not. This means that you can call a 
function declaration before it is defined, but you cannot do this with a function expression.
2)With function expressions, you can use a function immediately after it is defined. 
3)With function declarations, you have to wait until the entire script has been parsed.
4)Function expressions can be used as an argument to another function, but function declarations cannot.
5)Function expressions can be anonymous, while function declarations cannot.*/

// Undefined: it is present in the memory space but no value has been assigned to it yet.
// undefined means a variable has been declared but has not yet been assigned a value :
//Null: null is an assignment value. It can be assigned to a variable as a representation of no value :

/*var testVar;
console.log(testVar); 
console.log(typeof testVar); */

/*var testVar = null;
console.log(testVar);
console.log(typeof testVar); */

//With the call() method, you can write a method that can be used on different objects.

// ler and const are block scoped .
// var is function scoped .



// javascript engine takes the variable declaration and function declaration on the top of the code 
// but dose not takes the function expression on the top .



// Temporal Dead Zone


// var a;
// console.log(a);
// a = 10;

// Execution context in JS
// Hoisting
// Temporal Dead Zone



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var a;
 function show(){
    console.log('hello');
}
console.log(a);
a = 10;
show();
// Temporal Dead Zone

 function show(){
    console.log('hello');
}
// var a;
// console.log(a);
// a = 10;

// Execution context in JS
// Hoisting
// Temporal Dead Zone