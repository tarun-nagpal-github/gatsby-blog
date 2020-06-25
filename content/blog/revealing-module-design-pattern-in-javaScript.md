---
title: Revealing Module Design Pattern — In JavaScript
description: >-
  The Revealing Module pattern is the commonalty used design pattern which is
  easy to use and understand. This pattern define all of our…
date: '2018-06-27T12:40:46.573Z'
categories: []
keywords: []
slug: /@tarunnagpal78/revealing-module-design-pattern-in-javascript-3b0db0bcd121
---

![Revealing Module Design Pattren](img\1__r17weOZoqd1wDilItv3osQ.jpeg)
Revealing Module Design Pattren

The Revealing Module pattern is the commonalty used design pattern which is easy to use and understand. This pattern define all of our functions and variables in the private scope and it return an object with pointers to the private functionality we wished to reveal as public.

In this way we can expose all those properties which we wish to make them public. The pattern can also be used to reveal private functions and properties with a more specific naming scheme if we would prefer.

It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which increase the readability.

This pattern allows us to actually invoke private functions via our public methods.

I have created an example which might clear the implementation.

This is a calculator class which is having the following methods.

1.  \_privateFunction() // private function

2\. sum() // public function

3\. mul() // public function

4\. divide() // public function

We can manipulate the operations with passing variables in constructor and getting the results accordingly.

```
/**
 * 
 * @param {number} x 
 * @param {number} y 
 * 
 * @returns function
 */
var Calculator = (function(){
    var _privateVariable = 100;
    
    //Private function 
    function _privateFunction(x, y){
        return (x*x) + (y *y);
    }
    function sum(x, y){
        return x + y;
    }
    function mul(x, y){
        return x * y;
    }
    function divide(x, y){
        return x / y;
    }
    function square(x, y) {     
        return _privateFunction(x, y);
    }
    // functions are revelied here
    return {
        sum : sum,
        mul : mul,
        divide : divide,
        square: square
    }
})();

var cal = Calculator;
console.log(cal.sum(2,3));
console.log(cal.mul(2,3));
console.log(cal.divide(2,3));
console.log(cal.square(2,3));

```