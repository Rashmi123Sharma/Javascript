/*Destructuring of objects :Object Destructuring is the syntax for extracting
     values from an object property and assigning them to a variable.*/
/*const obj ={name:'Rashmi',
        Lastname: 'Sharma',
        City :' Shimla',
        State :'HimachalPrdesh'};*/

    // Accessing the Objects:    
   /* console.log(obj);
    console.log(obj.name);
    console.log(obj['name']);*/

    // Can be done as :

    //const {name,City}=obj;
     //console.log(name,City);
     
     
    // Alias concept : changing  value of a particular key.
    /*const name='Piya';
     const {name:fname,City}=obj;
     console.log(name,fname,City);*/


     /* Array destructuring :*/
    //const arr=["hello","how","Are","you"];
    /*console.log(arr[0]);
     console.log(arr[1]);
     console.log(arr[2]);*/

     //Can be done as:
     /*let [a,b,c] = arr;
     console.log(a,b,c);*/

     
     
     /*Spread operator: it makes the copy of an object and an array*/

     /*const obj ={name:'Rashmi',
        Lastname: 'Sharma',
        City :' Shimla',
        State :'HimachalPrdesh'}

    const obj1 = {...obj};
   console.log(obj1);
   const obj2 = {...obj,name:'Piya'};
   console.log(obj2);
   const obj3 = {...obj,age:21};
   console.log(obj3);*/

   
   
   // For Array:
 /*  const arr=["hello","how","Are","you"];
   const arr1=[...arr];
   console.log(arr1);
   const arr2=['Hy',...arr,'Good'];
   console.log(arr2);*/


   // For loop in objects :
 /*const obj ={name:'Rashmi',
        Lastname: 'Sharma',
        City :' Shimla',
        State :'HimachalPrdesh'};

for (let key in obj)
{
    console.log(key,obj[key])
    // Template literal is written inside backticks it makes string concatination easy.
    const result = ` the result is  ${key}  = ${obj[key]}`;
    console.log(result);
}*/

// For loop in Array:
/*const arr=["hello","how","Are","you"];
for(let a of arr)
{
    console.log(a);
    
}
*/



// rest operator for functions:this is used when we have to pass multiple valus in a function.
/*function mult(a,b,...args)
{
    let m=a*b;
    for (let v of args)
    {
        m = m*v;
    }
    return m
}
let result = mult(1,2,3,4);
console.log(result);*/


// Ternary operator : if else condition can be written in one line .

/*const age = prompt("Enter the age: ");
if (age>18)
console.log(age , 'this person can vote');
else
console.log(age,"this person can not vote");

const age = prompt("Enter the age: ");
let result=(age>18)?(age , 'this person can vote'):(age,"this person can not vote");
console.log(result);*/





   




    
     

    



