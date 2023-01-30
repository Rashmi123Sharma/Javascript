// Function declaration:
/*function divd(a,b)
{
    let c=a/b;
    return c;
}
d=divd(4,2);
console.log(d);*/


// Arrow function:
/*let divd=(a,b) => a/b;
let c=(4,2)
console.log(c);*/

// Slice:
/*let a=[3,4,5,4,2,6,7];
console.log(a);
let result = a.slice(1,4);
console.log(result);*/


// reverse:
/*let a=[3,4,5,4,2,6,7];
console.log(a.reverse());*/

// join:
/*let arr=["A","B","C","D","E","F"];
console.log(arr.join());
let a=["A","B","C","D","E","F"];
console.log(a.join("-"));*/

//split:
/*let a="Hello how are you";
let res = a.split( " ");
console.log(res);*/

// indexOf:
/*let arr =[2,3,4,5,6]
console.log(arr.indexOf(3));*/

// includes:
/*.log(arr.includes(3));
console.log(arr.includes(9));*/

///*Functions of strings:   */ 
/*const str = 'This is my first message';
console.log(str);
console.log(str.length);
console.log(str[0]);
console.log(str.includes('my'));
console.log(str.indexOf('my'))
console.log(str.toUpperCase());
console.log(str.toLowerCase());*/

//Trim Function.
/*const str = ' I am studying basics of javascript  ';
console.log(str.length);
let a=str.trim();
console.log(a);
console.log(a.length); //remove spaces from left and right
*/

//Triming form left
/*const str = ' I am studying basics of javascript  ';
console.log(str.length);
let a=str.trimLeft();
console.log(a);
console.log(a.length); */

// Triming form right ..
/*const str = ' I am studying basics of javascript  ';
console.log(str.length);
let a=str.trimRight();
console.log(a);
console.log(a.length); */

// Spliting a string 
/*const str = ' I am studying basics of javascript  ';
console.log(str.split(" "));*/

//Replacing a word with another..
/*const str = ' I am studying basics of javascript  ';
 console.log(str.replace('basics', 'advance'));*/

 //Starts with.. 
/*console.log(str.startsWith(' '))*/


// High order functions using arrow functions..

// forEach using normal function.

/*let arr=[2,3,4,5];
arr.forEach(function(element,index)
{
    arr[index]=element*2;

});
console.log(arr);*/

// forEach using arrow function..
/*let arr=[2,3,4,5];
arr.forEach((element,index) =>
 arr[index]=element*2);
console.log(arr);*/

// map function using normal function..
/*let arr=[4,5,3,7,8];
let result = arr.map(function(element)
{
    return element*2;
});
console.log(result);*/

//  map function using arrow function..

/*let arr=[4,5,3,7,8];
let result = arr.map((element) =>
element*2);
console.log(result);*/

// filter using normal function..
/*let arr= [3,5,2,6,7,8];
let result = arr.filter(function(element)
{
    return element<6;
});
console.log(result);*/

// filter using arrow function.
/*let arr= [3,5,2,6,7,8];
let result = arr.filter((element) =>
element<6);
console.log(result);*/


// reduce function using normal function..

/*const numbers = [1,2,3,4,5];

const result = numbers.reduce(function(multi, currentValue) {
return multi * currentValue;    
}, 1);
console.log(result);*/

//reduce function using arrow function..

/*let arr=[1,2,3,4,5];

let result=arr.reduce((mult,currv) => mult*currv,1);
console.log(result);*/

// Matching the strings..

/*const str1 = 'JAVASCRIPT';
const str2 = 'Javascript';

if(str1 === str2){
    console.log('matched');
}else{
    console.log('not matched');
}// Not Matched..*/


/*const str1 = 'JAVASCRIPT';
const str2 = 'Javascript';

if(str1.toLowerCase() === str2.toLowerCase()){
    console.log('matched');
}else{
    console.log('not matched');
} // Matched*/





// Anonymous functions:Functions that have no name are called anonymous functions.

/*let sum = function(a,b)
{
    console.log(a+b);
}
(2,3);*/

/*IFFE:  and then there are Functions that are executed 
as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or IIFEs.*/
let sum = (function(a,b)
{
    console.log(a+b);
})
(2,3);


/*let result = (function(){
    console.log('hello');
})();*/


