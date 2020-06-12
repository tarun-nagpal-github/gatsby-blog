---
title: Facade Design Pattren in PHP
description: >-
  Facade Design Pattern is useful in the cases where we need to hides all the
  complexities of the system and displays a friendly picture.
date: '2018-06-22T06:08:59.295Z'
categories: []
keywords: []
slug: /@tarunnagpal78/facade-design-pattren-in-php-94dbc066cc01
---

![Facade Design Pattern (Implemented in PHP)](img\1__UdX7g8TjfKSCWwjS__HIOcg.jpeg)
Facade Design Pattern (Implemented in PHP)

Facade Design Pattern is useful in the cases where we need to hides all the complexities of the system and displays a friendly picture.

It is a Structural design patterns which plays a vital role in some use cases. It is an object that provides a simplified interface to a larger body of code, such as a class library/code.

It make the library more readable and reduce dependencies of outside code on the inner workings of a library.

Below is the example implementation in PHP.

This code is used to give the Transport Fare between 2 cities. I have created 3 different classes for these (not actual logic but a basic one).

*   Bus — Calculate the Bus Fare.
*   Train — Calculate the Train Fare
*   Plane — Calculate the Air Fare

Now, we have 2 ways to access all the data. First is the normal in which we create the objects normally and access it globally. Second is using the Facade Pattern (As we did).

In Facade, we instantiated all the objects in a single class and it acts as an interface for all the other classes.

<?php

class Bus  
{  
    public $baseFare = 500;  
    public $tax = 50;  
    function getFare()  
    {  
        return $this->baseFare + $this->tax;  
    }  
}  
class Train  
{  
    public $baseFare = 800;  
    public $tax = 80;  
    function getFare()  
    {  
        return $this->baseFare + $this->tax;  
    }  
}  
class Plane  
{  
    public $baseFare = 5500;  
    public $tax = 500;  
    function getFare()  
    {  
        return $this->baseFare + $this->tax;  
    }  
}  
class ShowCityFare  
{  
    function showFares($origin, $destination)  
    {  
        $busFare   = new Bus();  
        $trainFare = new Train();  
        $planeFare = new Plane();

        print "List of Fares " . $origin . " to " . $destination;  
        print "<br>Bus Fare --> " . $busFare->getFare();  
        print "<br>Train Fare --> " . $trainFare->getFare();  
        print "<br>Plane Fare --> " . $planeFare->getFare();

    }  
}  
$fares = new ShowCityFare();  
$fares->showFares("Chnadigarh", "Delhi");