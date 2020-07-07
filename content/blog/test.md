---
title: What are SOLID Principles 
description: 'Developing a robust and scalable application is the ultimalte goal of a programmer. In order to achive this with best possible way we need SOLID Principals. There provide a elegent way to write code.'
date: '2018-08-04T08:06:46.769Z'
categories: []
keywords: []
# slug: /@tarunnagpal78/asynchronous-javascript-and-event-loop-d59c7e4b9fdd
---

![](https://images.pexels.com/photos/3707673/pexels-photo-3707673.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)



## SOLID Principles


Developing a robust and scalable application is the ultimalte goal of a programmer. In order to achive this with best possible way we need SOLID Principals. There provide a smarter and efficent way to write code.

No matter which language you choose to write the code, these will guide you to write the code which can be more modular/testable/maitainable.

Firstly introduced by **Robert C. Martin** aka **Uncle Bob**. These principles are also referred to as the “First Five Object Oriented Design Principles”. We can write **maintainable**, **extendable **and **testable **code using these principles.

### S — Single Responsibility Principle:

Responsibility means “**Reason to change the class**” which results in short components/classes.

Take an example: 
We want to program something like a multipurpose knife

![](https://cdn-images-1.medium.com/max/2000/1*ZQAm1yTj1xMrfl8chGlptQ.jpeg)

One approach can be to write a class called “MultiPurposeKnife.java” which includes all the different functionalities like 
cut()
fileNail()
driveScrew()
magnify()
and Many more.
So the class will get very complex and lengthy.

Instead we should split our class into multiple classes each handling single responsibility. Foe example:
**Scissors.java** having cut() functionality,
**NailFiler.java** having fileNail() functionality,
**Bottleopener.java** for opening bottle caps etc,
**ScrewDriver.java** having driveScrew() functionality,
**GlassMagnifier.java** having magnify() functionality etc.

Using this approach we follow single responsibility principle, and makes the code easy to maintain and more layered, as we know exactly where to make the change.
>  Please note that single responsibility does not mean that it will have only one method or so. For instance in the above example we can have BottleOpener.java which can have methods like cutCapOpen(), openUsingOpener(), etc i.e. in the nutshell say we can pass any bottle and it can open it for us. Thus it does Single task to open a bottle.

### O — Open Closed Principle:

According to this priciple classes should be 
“**open for extension but closed for modification**”, or we should add new features using inheritance without changing the existing classes.

For instance:

    public enum PaymentType {
        *COD*,
        *NET_BANKING*;
    }
    
    public class PaymentHandler {
    
        public void makePayment(PaymentType type) {
            switch (type) {
                case *COD*:
                    // handle COD payment.
                    break;
                case *NET_BANKING*:
                    // handle netbanking payment
                    break;
            }
        }
    }

Lets say we have PaymentHandler.java class handling various modes of payments.

It looks fine but it violates Open-Closed principle as now to extend the class to add debitCard payments we need to modify the existing class. We need to add enum type for debit card payment, and handle that case in PaymentHandler.java as:

    public enum PaymentType {
        *COD*,
        *NET_BANKING*,
        *DEBIT_CARD*;
    }
    
    public class PaymentHandler {
    
        public void makePayment(PaymentType type) {
            switch (type) {
                case *COD*:
                    // handle COD payment.
                    break;
                case *NET_BANKING*:
                    // handle netbanking payment
                    break;
                case *DEBIT_CARD*:
                    // handle debit card payment
                    break;
            }
        }
    }

But we can still get this functionality without modifying the existing classes if we have an interface IPayment for example. And we implement it in various different payment modes, let it be netbanking/cod etc.

    public interface IPayment {
    
        void makePayment();
    }
    
    class NetBankingPayment implements IPayment {
    
        @Override
        public void makePayment() {
            // handle netbanking payment
        }
    }
    
    class CODPayment implements IPayment {
    
        @Override
        public void makePayment() {
            // handle COD payment
        }
    }
    
    public class PaymentHandler {
    
        public void makePayment(IPayment type) {
            type.makePayment();
        }
    }

See the classes look so compact and easy to read. Now to add debit card payment functionality we need another class implementing IPayment and thats it. We are done. No need to change any of the existing code.

### L- Liskov Substitution Principle:

According to this, a method that takes X as a parameter must be able to work with any subclass of X.

A great example(given by Uncle Bob in a podcast) was how sometimes something that sounds right in natural language doesn’t quite work in code.
In mathematics, a Square is a Rectangle. Indeed it is a specialization of a rectangle. The "is a" makes you want to model this with inheritance. However if in code you made Square derive from Rectangle, then a Square should be usable anywhere you expect a Rectangle. This makes for some strange behavior.
Imagine you had SetWidth and SetHeight methods on your Rectangle base class; this seems perfectly logical. However if your Rectangle reference pointed to a Square, then SetWidth and SetHeight doesn't make sense because setting one would change the other to match it. In this case Square fails the Liskov Substitution Test with Rectangle and the abstraction of having Square inherit from Rectangle is a bad one.

![](https://cdn-images-1.medium.com/max/2000/1*ToXLL1aet69THe2qxuwCmQ.jpeg)

With code perspective: Lets say we have 2 phones, Landline and SmartPhone. Now to dial a number in Landline we dial straighway, but incase of smartphones we unlock the phone and then dial it.

    public interface IPhone {
        void dial(int number);
    }
    
    public class LandLinePhone implements IPhone {
    
        @Override
        public void dial(int number) {
    
        }
    }
    
    public class SmartPhone implements IPhone {
    
        @Override
        public void dial(int number) {
            if (isLocked()) {
                return;
            }
        }
    
        private boolean isLocked() {
            // Some Logic to check if the phone is locked.
        }
    
        private boolean unlock() {
            // Some Logic to unlock the phone
        }
    }
    
    public class PhoneManager {
    
        public void makeCall(IPhone phone) {
            phone.dial(123456789);
        }
    }

So phoneManager receives the phone and makes the call. So if the phone is smartphone and if its locked, we can’t dial in this example.

One approach can be to handle it in PhoneManager like:

    public class PhoneManager {
    
        public void makeCall(IPhone phone) {
            if (phone instanceof SmartPhone) {
                SmartPhone smartPhone = (SmartPhone) phone;
                if (smartPhone.isLocked()) {
                    smartPhone.unlock()
                }
            }
            phone.dial(123456789);
        }
    }

And this will serve the purpose. But it VIOLATES THE OPEN-CLOSED PRINCIPLE. we are modifying existing class to extend the functionality. And if in future we need to add another Phone, then again we need to modify PhoneManager class. 
So here makeCall which takes IPhone as a parameter is unable to serve SmartPhone and LandLinePhone similarly, hance violating the LSP.

    public class SmartPhone implements IPhone {
    
        @Override
        public void dial(int number) {
            if (isLocked()) {
                unlock();
                // Some logic
            }
        }
    
        private boolean isLocked() {
            // Some Logic to check if the phone is locked.
        }
    
        private void unlock() {
            // Some Logic to unlock the phone
        }
    }
    
    public class PhoneManager {
    
        public void makeCall(IPhone phone) {
            phone.dial(123456789);
        }
    }

So if we make the class with the changes it have, then PhoneManager need not worry which type of phone it is receiving. So with this change PhoneManager which receives input as IPhone, serves all types of phones similarly, hence complying with the LSP.

### I-Interface Segregation Principle:

It says that the complex interfaces should be split, as complex interfaces makes it harder to extend smaller parts of our system.

Say for example of the smartPhone again:

    public interface ISmartPhone {
        void call(int number);
    
        void answerCall();
    
        void rejectCall();
    
        void turnWifiOn(int number);
    
        void turnWifiOff();
    
        void turnBluetoothOn();
    
        void turnBluetoothOn(int number);
    }

It looks very complex. Now if we want a WifiManager class implementing this interface, we will get many empty methods, similarly for BluetoothManager or PhoneManager class.

So we can split this interface like:

    public interface IWifiManager {
        void turnWifiOn(int number);
    
        void turnWifiOff();
    
    }
    
    public interface IBluetoothManager {
        void turnBluetoothOn();
    
        void turnBluetoothOn(int number);
    }
    
    public interface IPhoneManager {
        void call(int number);
    
        void answerCall();
    
        void rejectCall();
    }

So now we can extend any particular interface/s and make the design look neat, without any empty methods.

### D- Dependency Inversion Principle:

This states that we should not have any hidden dependency, and let the calling class create the dependency, instead of letting the class itself creating the dependency.

Take for example a Phone handling wifi and bluetooth as:

    public class Phone {
    
        private WifiManager mWifiManager;
        private BluetoothManager mBluetoothManager;
    
        public Phone() {
            mWifiManager = new WifiManager();
            mBluetoothManager= new BluetoothManager();
        }
    }

So in the constructor we are creating different components, WifiManager and BluetoothManager. These are **hidden dependencies**. These are called hidden because the calling class(which calls new Phone()) can not see these dependencies, it cant see our phone is dependent on which components.

So below is the better version:

    public class Phone {
    
        private WifiManager mWifiManager;
        private BluetoothManager mBluetoothManager;
    
        public Phone(WifiManager wifiManager, BluetoothManager bluetoothManager) {
            mWifiManager = wifiManager;
            mBluetoothManager = bluetoothManager;
        }
    }

Here the calling class will itself provide the dependencies to the Phone. This is very helpful for testing as it gives the opportunity to provide more components for our Phone class, and test every component separately.

## Conclusion:

**S (Single Responsibility Principle)** where each class has single responsibility to manage.

**O (Open Closed Principle)** where we can introduce new code/changes without modifying the existing code.

**L (Liskov Substitution Principle)** where a method that takes X as a parameter must be able to work with any subclass of X

**I (Interface Segregation Principle)** which states that complex interfaces should be split into multiple smaller interfaces.

**D (Dependency Inversion Principle)** which states that no class should have any hidden dependency, but the calling class creates the dependency instead.
