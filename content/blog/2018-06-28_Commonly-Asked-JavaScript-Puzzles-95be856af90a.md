---
title: Commonly Asked JavaScript Puzzles
description: >-
  Recently, I have gone through various JavaScript interviews and I have
  composed a list which could help others as well.
date: '2018-06-28T19:38:01.174Z'
categories: []
keywords: []
slug: /@tarunnagpal78/commonly-asked-javascript-puzzles-95be856af90a
---

![Commonly Asked JavaScript Puzzles](img\1__5iU7BKGIZyI0Uid0xD__Ncw.jpeg)
Commonly Asked JavaScript Puzzles

Recently, I have gone through various JavaScript interviews and I have composed a list which could help others as well.

These are just few and I would like to have more contributions from readers to enhance it more.

Please feel free to add more in comments.

**Puzzle 1** (**Closures**)

/\*   
   Write a mul function which behaves like below  
   mul(1)(1)(1)(1)(1)(); return 5   
\*/

function addNum(x) {  
    return function(y) {  
        if (typeof y !== 'undefined') {  
            x = x + y;  
            return arguments.callee;  
        } else {  
            return x;  
        }  
    }  
}  
console.log( addNum(1)(2)(3)() );

**Puzzle 2 (delete operator on local variable)**

// // What is the output   
var output = (function(x) {  
    delete x;  
    return x;  
})(0);

console.log(output);  
// output 0

**Puzzle 3 (delete operator on Object)**

// What is the Output   
var Employee = {  
    company: 'xyz'  
}  
var emp1 = Object.create(Employee);  
delete emp1.company  
console.log(emp1.company);

// Output  'xyz'

**Puzzle 4 (delete operator on Array)**

// What is the output   
  var trees = \["xyz", "xxxx", "test", "ryan", "apple"\];  
  delete trees\[3\];  
  console.log(trees.length);

// output 4

**Puzzle 5 (Type conversion)**

// What is the Output   
var bar = true;  
console.log(bar + 0);  
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);

// output 1 truexyz 1 2

**Puzzle 6 (Variable Hoisting)**

var salary = "9999";

(function() {  
    console.log("Original salary was " + salary);  
    var salary = "8888";  
    console.log("My New Salary " + salary);  
})();

// output undefined 8888

**Puzzle 7 (Array Checking)**

// How to check if an variable is array or not  
function isArray(value) {  
  return Object.prototype.toString.call(value) === '\[object Array\]';  
}

**Puzzle 8 (How to Empty an Array)**

// // How to empty an array  
var Uids = \[1, 2, 3, 4\];  
newUids = Uids;

// Pattren 1   
Uids = \[\];  
console.log(Uids);  
console.log(newUids);

// Pattren 2  
Uids.length = 0;  
console.log(Uids);  
console.log(newUids);

**Puzzle 9 (**What are closures and give an example of it**)**

function createFunction(x) {  
    return function(y) {  
        return x + y;  
    }  
}

var myFunc = createFunction(10);  
console.log(myFunc(20));

#### More where this came from

This story is published in [Noteworthy](http://blog.usejournal.com), where thousands come every day to learn about the people & ideas shaping the products we love.

Follow our publication to see more product & design stories featured by the [Journal](https://usejournal.com/?utm_source=usejournal.com&utm_medium=blog&utm_campaign=guest_post) team.