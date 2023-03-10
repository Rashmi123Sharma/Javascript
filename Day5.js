/*Question 1:*/ 
const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];  


// 1. count number of people

console.log(people.length);

// 2. sum of ages 

let result=people.reduce(function(sum,curval)
{
  return sum+curval.age
},0);

console.log(result);

// 3. get array of names
let result=people.map(function(element)
{
    return element.name
});

console.log(result);

// 4. find max age
let result=people.reduce(function(prev,cur)
{
    if(prev.age<cur.age)
    {
    return cur
    }
    else
    {
      return prev
    }
},);

console.log(result);


// 5. find min age

let result=people.reduce(function(prev,cur)
{
    if(prev.age>cur.age)
    {
    return cur
    }
    else
    {
      return prev
    }
},);

console.log(result);

// 6. find by name



Question 2:
// find count occurences

const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

// output should be (count of occurences )
{
pending: 2, cancelled: 1, shipped: 1
}



//Question 3:
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Get 21 and older
const newage=[];
for ( let val of ages)
{
  if(val>=21)
  newage.push(val)
}
console.log(newage);


Question 4: Learn about sorting an array in Javascript.

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// sort ages

// sort age
console.log(ages.sort(function(a, b){return a-b}));
console.log(ages.sort(function(a, b){return b-a}));




Question 5:
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];



// Filter Retail companies
let result=companies.filter(function(element)
{
    return element.category=='Retail';
});
console.log(result);

// Get companies that lasted for 10 or more years
let result=companies.filter(function(element)
{
   return (element.end-element.start)>=10 
});
console.log(result);


// create array of company names
let result=companies.map(function(element)
{
    return element.name;
});
console.log(result);

// Get total years for all companies
let result=companies.map(function(element)
{
   return (element.end-element.start) 
});
console.log(result);

// Sort companies by sort year(Learn sorting an array in Javascript)
let result= companies.sort(function(a,b)
{
    return (a.start-b.start)
});
console.log(result);