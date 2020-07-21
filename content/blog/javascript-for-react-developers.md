---
title: JavaScript basics for React developers 
description: 'JavaScript is so vast and it becomes difficult to master everything. I have composed few points of JS (JavaScript) that will help you understand these frameworks like React easily..'
date: '2020-04-04T08:06:46.769Z'
categories: []
keywords: []
# slug: /@tarunnagpal78/asynchronous-javascript-and-event-loop-d59c7e4b9fdd
---


As we are using new frameworks like React/Vue/Angular, it is very important to understand some of the basics of JavaScript.



JavaScript is so vast and it becomes difficult to master everything. Author composed few points of JS (JavaScript) that will help you understand these frameworks like React easily.



Author have tried to make them dead simple to understand but if you find anything unclear, please let me know in comments.


## About the Author

Gurinder SherGill - He is expert in JavaScript and tries to share whatever he can. You can find more about him here (https://www.linkedin.com/in/gurinder-shergill/)


## Lets get started to discuss these features.

## Variable Declaration

How do we declare a variable in JS ?

using ***var ***? Yes, but now we have two more keywords — ***let ***and ***const.***
>  ***var ***vs ***let ***vs ***const***

All three keywords are used to declare a variable. So what is the difference ? Lets see

***var ***— Used to declare variables but the scope of variables is *function block*. If declared globally, scope is *global.*

***let ***— Used to declare variables but variables are block scoped. *What is block ?* Block can be defined as the area with in start curly brace( { ) and end curly brace ( } ).

***const — ***Used to declare variables but variables can’t be reassigned. Declared variables are i̶m̶m̶u̶t̶a̶b̶l̶e̶ (*check edit ahead*) . const variables are also block scoped.

***Lets see in example***

    ***/*Using var to declare variables*/***

    function usingVar(){
         for(***var ***i=0;i<2;i++){                     // var declaration
             console.log('In loop: '+ i);
         }
         console.log('After loop : '+ i);
    }
    usingVar();

    **Output**:
    In loop: 0
    In loop: 1
    After loop: 2
    

    ***/*Using let to declare variables*/***

    function usingLet(){
         for(***let ***i=0;i<2;i++){                     *// let declaration*
             console.log('In loop: '+ i);
         }
         console.log('After loop : '+ i);
    }
    usingLet();

    **Output**:
    In loop: 0
    In loop: 1
    **Uncaught ReferenceError: i is not defined ** 
    */* i is not available outside 'for' block because it is declared using let keyword*/*

    ***/*Using const to declare variables*/***

    function usingConst(){
         const pie = 3.14;                         //const declaration
         console.log(pie);
         pie = 3;
         console.log(pie);
    }
    usingConst();

    **Output**:
    3.14
    **Uncaught TypeError: Assignment to constant variable
    ***/* because we are try to re-assign pie which is declared using const */
    *

    ***/*Using all types of keywords to declare variables*/***

    function usingAll() {
       ***const *myName **= "Gurinder";
       ***var *myWebsite **= "medium.com";
           {                             //creating blocks for demo
              ***const *myName **= "Shergill";
              console.log(myName);
              ***let*** **myWebsite** = "webegic.com"; 
                   {
                      ***let *myWebsite **= "gurindershergill.in";
                      console.log(myWebsite);
                    }
               console.log(myWebsite);
            }

      console.log(myName);
      console.log(myWebsite);
    //  **myName **= 'Gurinder Shergill';     //can't do this, myName is already declared in this block. It is read only now
    
    }

    usingAll();

    **Output:**

    Shergill
    gurindershergill.in
    webegic.com
    medium.com
    Gurinder

So, we should use let over var to not pollute other blocks. But it needs to be used with care, because sometimes we need variables outside the blocks, too.We have a habit to declare with ***var ***which serves the purposes outside block but*** let ***won’t***.***

**const **is also very useful to avoid mistakenly re-assigning of constant variables. It will throw an error but won’t re-assign a variable.

    const numbers = [1,2,3];*** 
    ***numbers.push(4);    //is totally fine.

    /* But we can’t point to new array */
    numbers = [1,2,3,4];  //ERROR. We can't point to new array address.

## Classes

This is a great feature in ES6. Before ES6 there were workarounds to use OOP concepts but there was no class keyword to create classes. Now classes have been introduced in ES6, and it becomes very easy to create the same kind of objects from a class blue print.

**Lets see how to create a class and create objects from a class**

    ***/*Defining Class*/***

    ***class *ClassName **{

            constructor(propertyValue){
               this.property = propertyValue;
            }

         functionName(){

               // function body

            }

    }

    ***/* Creating objects from class */***

    **let objName = new ClassName(propertyValue);**

**Points to note:**

* ***function ***keyword is not used to declare functions. We don’t need to have the word function for declaring methods.

* We can’t assign properties as we do in methods. We initialize them using a ***constructor ***method.

* ***constructor ***method is a special method which is called on the creation of objects and used to initialize the class instance.

* ***this ***will always point to the current object

**Lets have a look at an example**

    **/*Class*/**
    ***class *Vehicle **{

          constructor(name, model) {
                this.name = name;
                this.model = model;
          }
        
          showModel() {
                 console.log("Model of " + this.name + " is: " +          this.model);
           }
    }

    **/*Creating Object*/**

    ***let *car **= new Vehicle("Audi", "R8");
    car.showModel();                   //method calling

    **/* Output: */
    **Model of Audi is: R8

## Inheritance

Inheritance is the mechanism of creating a new class(child class) from another class (parent class). Inherited class inherits all the methods of parent class.

*Lets see how to inherit a class from another class*

    **/* Parent Class */**
    ***class *ParentClass**
    {
       constructor(properties){
         this.properties = properties;
         }
       getMothod(){return this.properties};
       methods(){}
    }
    

    **/*Inheriting class*/**

    ***class ***ChildClass ***extends ***ParentClass 
    {
        constructor(properties, classSpecificProperties)
         {
             super(properties);
             this.classSpecificProperties = classSpecificProperties
         }
        super.getMethod();
        classSpecificeMethods(){}

    }

    let childClassObject = new ChildClass(properties, classSpecificProperties);

    childClassObject.methods();
    childClassObject.classSpecificeMethods();

**Points to note:**

* ***super()*** method is mandatory to call if we have declared a custom constructor for Child Class, else not required.

* ***super ***is used to call Parent Class methods inside Child Class

* Child class will have access to all parent class methods.

* ***this ***will always point to current object

**Lets have a look at an example**

    **/*Parent Class*/**
    class Vehicle {

         constructor(name, model) {
                   this.name = name;
                   this.model = model;
                 }

           showModel() {
                  console.log(this.model);
               }

            getModel() {
                   return this.model;
               }
            getName() {
                   return this.name;
                }
     }

    **/*Child Class inheriting parent class*/**

    class FourWheelers ***extends ***Vehicle {
              constructor(name, model, noOfSeats) {
                      super(name, model);
                      this.noOfSeats = noOfSeats;
                  }

              showNoOfSeats() {
                    console.log(***super***.getName() + ***super***.getModel() + "has " + this.noOfSeats + "seats");

              }
     }

    **/*Creating Child class object*/**

    let myCar = new FourWheelers("Audi", "R8", 5);
    myCar.showNoOfSeats();          // Child Class method
    myCar.showModel();              // Parent class method

## **Arrow functions**

Arrow functions are a great feature introduced in ES6. We now have a cleaner and easy way to write functions and callback fucntions. One more benefit of arrow functions is that — ***this **always points to current objects in arrow functions.*

*Lets see how to declare arrow functions*

    ***/*If more than one parameters*/***
    name = (one, two) => {
          return one + two;
     }

    ***/*If only receive one parameter*/***
    name = parameter => {
          return parameter;
     }

    ***/*If no parameter*/***
    name = () => {
          console.log('Hello World')
     }

    ***/*If there is only a return statement, we can exclude {} and return*/***

    name = (one,two) => one + two;

Lets have a look at an example

    ***/*Simple function*/***

    function sum(value1,value2 ){
      return value1+value2;

    }

    ***/*Arrow function*/***

    let sum =(value1,value2 ) => value1+value2 ;

    var total = sum(5,6);
    console.log(total);

    
    ***Output:
    11***

Arrow functions are mostly used as callback functions and these are very efficient to use.

**Lets look at an example**

    var employees = [
           {id:1 ,isMale: true},
           {id:1 ,isMale: true},
           {id:1 ,isMale: fasle},
           {id:1 ,isMale: true}
    ]

    **/*We need to get male employees only*/**

    **/*Using simple fucntion*/
    **let maleEmployees **= **employees.filter(function(emp){return emp.isMale});

    **/*Using arrow function*/
    **let maleEmployees **= **employees.filter(emp => emp.isMale);

**this in arrow functions**

***this ***in arrow functions always inherits ***this ***object from the context in which the code is defined. We don’t need to do that = this or self = this or .bind(this) .

    **/*With simple callback function*/**
    var self = this;
     $('.btn').click(function(event){
       self.anyMethod() 
    })

    **/*With arrow functions as callback function*/**
     $('.btn').click((event)=>{
       this.anyMethod() 
    })

## Array.map()

An array method *array.map()* will be useful to transform all array elements . This method doesn’t modify the original array. It returns a new array.

    let newArray = array.map(function(arrayItem){
         // any operation on arrayItem
           return modifiedItem;
    }) 

    **/*Using Arrow function for callback function*/**

    let newArray = array.map(arrayItem => arrayItem * arrayItem); *//multiplication for demo purpose, we can do any operation or use arrayItem to do other operations.*

**Lets have an example**

    numbers = [1,2,4,5,6,7]

    **/*We need a new array with cubes of all these numbers*/**

    let cubeOfNumbers = numbers.map(number=>number*number*number); // 

## Template Literals

Template literals allow us to form a string template with ease. It allows us to put the JavaScript variables into a string using placeholders. We use `` back-tick operators to form a string and ${variableName} as a placeholder. Back-tick operator is the key before 1 on keyboard.

Lets have an example

    let name='Gurinder';
    let age= 25;**
    **let info= "My name is "+ name +" and age is "+ age +" years";

    **/*Using template literals*/**

    let name='Gurinder';
    let age= 25;**
    **let info= `My name is ${name} and age is ${age} years`

    /*This is so easy to use and is more readable when large string templates are created.*/

## Multi-line Strings

We can use back-tick operators to form multi-line strings. Just put ` operator before and after the string.

    **/*Without using `` */**
    var demoString = 'First line of demo string,\n\t'     
    + 'Second line of demo string.\n\t'     
    + 'Third line of demo string,\n\t'     
    + 'Fourth line of demo string.\n\t'

    **/*Using `` */**
    var roadPoem = `First line of demo string,
                    Second line of demo string.
                    Third line of demo string,
                    Fourth line of demo string.`

## **Object Destructuring**

Object destructuring is used to get property values from objects easily. Before ES6 we had to write *n* number of lines if we want to extract *n properties. *But now with object destructuring we can do it with ease.

Lets have and example

    var person = {
         name : 'Gurinder',
         age : 25,
         website: 'gurindershergill.in'
    }

    **/*If we need to extract info of person object to variables
    Without Object Destructuring*/**
    var name = person.name;
    var age= person.age;
    var website = person.website;

    **/*Using Object Destructuring*/
    var {name, age, website} = person;**      // this will create 3 variables and extract information from person object and will assign to variables.

    var {name:nm, website:web} = person     // if we want to use another name for variables other than object keys,we can use ":" to give alias name. 

## Spread Operator

The spread operator is represented by … three dots. Spread operator is used to extract all array items or object properties. To create objects we use {…} and to create arrays we use […]

**Lets have an example**

    **/*Object Cloning using spread operator*/
    **var person = {
         name : 'Gurinder',
         age : 25,
         website: 'gurindershergill.in'
    }

    var anotherPerson = {...person}    //Object clone, as simple as that

    **/*Array Cloning using spread operator*/
    **var numbers = [1,2,3,4,5,6,7,8]

    var anotherNumbers = [...numbers] ** ** // Array cloned

    **/*Combining Objects*/
    /*We can easily combine multiples object and can also add more properties using spread operator*/**

    var person = {
         name : 'Gurinder',
         age : 25,
         website: 'gurindershergill.in'
    }

    var university = {
         uniName: 'Thapar University',
         location : 'Patiala'
    }

    var fullInfo = {...person,...university, company:'Nagarro'};
    //This will create a new object by combining.

    **/*Combining Arrays*/
    /*We can easily combine multiples arrays and can also add more items using spread operator*/**

    var numbers = [1,2,3];
    var moreNumbers = [5,6,7,8];
    var allNumbers = [...numbers,4,...moreNumbers];
    //This will create a new array by combining.

## Modules

Modules means dividing our code in different files for reusability and better maintainability. A module can be referred as a single JavaScript file.

Methods, classes, variables declared in one module are private by default. We can’t use them in other modules directly. Scope of variables declared globally also is limited to a single file or module only.

This is a great benefit of Modules as explained below:
>  *If the global variable is declared with same name in two files, the variable is overwritten by later declaration. But this is not applicable in ES6, because the scope of globally declared variables is limited to single module or file only. Global variables in different modules are treated as different variables.*

Now thinking, then how to access variables of one module in another module. *eh..?*
>  If we want to use the variables in different modules, we have to explicitly export variables, methods to make them public.

We use the ***export ***keyword before class and variables to make them available for other modules. The ***import ***keyword is used to import variables or classes from other modules

Export: export const variableName or export class ClassName{}

Import: import {exportedObject} from ‘filePath’

Lets have an example of code in which we create a ***Classes Inheritance*** section***. ***In that section we have done all the code in a single file. Now we will split our code into different modules(files).

    ***/*file : vehicle.js*/***

    ***export ***class Vehicle {       //Class exported for other modules

    constructor(name, model) {
                   this.name = name;
                   this.model = model;
                 }

    showModel() {
                  console.log(this.model);
               }

    getModel() {
                   return this.model;
               }
            getName() {
                   return this.name;
                }
     }

    **/*File: fourWheelers.js*/**

    ***import {Vehicle} from './vehicle.js'***
    //Vehicle class imported because we will inherit class from this class

    ***export ***class FourWheelers extends Vehicle {
              constructor(name, model, noOfSeats) {
                      super(name, model);
                      this.noOfSeats = noOfSeats;
                  }

    showNoOfSeats() {
                    console.log(super.getName() + super.getModel() + "has " + this.noOfSeats + "seats");

      }
     }

    **/*program.js*/**

    ***import {FourWheelers} from './fourWheelers.js'***
    //FourWheelers class imported because we will create object of this class in this module

    let myCar = new FourWheelers("Audi", "R8", 5);
    myCar.showNoOfSeats();

***There are lot more features introduced and improved in ES6 like:***

* New Math, Object Methodes,

* Default Parameters

* Generators

* Promises

* Map and Set

* And some more…

For the sake of modularity (pun intended), I will cover them in the next article. Stay tuned.

Thank you for reading. If you feel, this article can help someone to understand some important features, feel free to comment below 😃

### **Happy JavaScripting**
