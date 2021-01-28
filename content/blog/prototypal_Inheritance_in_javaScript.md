---
title: Prototypal Inheritance In JavaScript
published: true
description: Inheritance In JavaSript
tags: ["javascript",  "beginners", "inheritance", "prototypeInJavascript"]  
//cover_image: https://direct_url_to_image.jpg
---

I have recently gone through some of the roots in JavaScript. It always fruitful when you look back to the basics of any Language.  

There were a couple of questions in my Mind like 

- What is Prototype in JS?

- What is Prototypal Inhertictane? How it is different from OOPS Inhertictane.

- How does Class work in JS?

In order to get all the answers, I created a small program on both the JS versions (Es5 and ES6).

Doing a practical will give you more understanding than reading and watching videos. 

So let's get started.


Inheritance in Older Version 

- Step 1 

Create a function(Tile) which will act as a base class.

- Step 2 

Create a function(PushableTile) which will act as a Child class.

- Step 3 

Assign the Prototype of Base class to Child class prototype. 

- Step 4 

Add methods to the child class, we will use it to access the Parent Class. 

- Step 5 

Create an Object from Child Class 


```javascript
// Base Class 
function Tile (x,y,type){
    this.x = x;
    this.y = y;
    this.type = type;
}


// Child Class
function PushableTile(x, y, type) {
    Tile.call(this, x, y, type);
}

// Inheritence 
PushableTile.prototype = Object.create(Tile.prototype);

// Add Methods to the child class 
PushableTile.prototype.push = function(x, y) {
    this.x += x;
    this.y += y;
};

var object = new PushableTile(100,200,300);
```

Inheritance in New JS Version

Step 1 

Create a base class (Tile) with a constructor.

Step 2 

Create a Child class with the constructor.

Step 3 

Add Super to the Base Class. It will help to pass the same parameters to the Parent class. 

Basically, it is doing the same thing as the below code is doing.

```javascript Tile.call(this, x, y, type); ``` 

Step 4 

Add methods to the Child class. 

Step 5 

Create an Object from Child Class 



```javascript
// Base Class 
class Tile {
     constructor(x,y,type){
        this.x = x;
        this.y = y;
        this.type = type;
        console.log("CONSTRUCTOR");
     }
}

// extends is same as PushableTile.prototype = Object.create(Tile.prototype);
class PushableTile extends Tile{
    constructor(x, y, type) {
      // Tile.call(this, x, y, type);
      super(x, y, type);
    }

    push(x, y) {
        this.x += x;
        this.y += y;
    }
}

const object = new PushableTile(100,200,300);
```
