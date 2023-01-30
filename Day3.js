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


/*array functions -  some  : It checks if any element in the array passes a test that we provide. If an 
element in the array passes the test, it returns true. If none of the elements passes the test, it returns 
false.*/

/*let arr=[4,6,7,3,8,9]
let res=arr.some(function(element)
{
    return element%3==0;
});
console.log(res);*/



/*array functions - every: It checks if all elements in the array pass a test that we provide. If all elements
 in the array pass the test, it returns true. If at least one element didn't pass the test, it returns false. */

 /*let arr=[4,6,7,3,8,9]
let res=arr.every(function(element)
{
    return element%3==0;
});
console.log(res);
*/


//empty an array

//let numbers = [7,8,9,45,3,4,6];
// solution 1
/*numbers = [];
console.log(numbers);*/

//solution 2
//numbers.length = 0;
//console.log(numbers);

// solution 3
/*numbers.splice(0, numbers.length);
console.log(numbers);*/

// solution 4

/*while(numbers.length > 0){
     numbers.pop();
 }

console.log(numbers);
*/


//array reduce: 
/*const numbers = [7,8,5,1,4];

const result = numbers.reduce(function(sum, currentValue) {
return sum + currentValue;    
}, 0);
console.log(result);*/



// Another way  to write if else condition..
/*let age=19;
console.log(age > 18 && 'Eligible to cast vote');
console.log(age < 18 && 'not Eligible to cast vote');*/


/* if the value of age is given it will return that value else it will return 0...*/
/*let age
let result = age ? age : 0;
result = age || 0;
console.log(result);*/

/*let age=10
let result = age ? age : 0;
result = age || 0;
console.log(result);*/




