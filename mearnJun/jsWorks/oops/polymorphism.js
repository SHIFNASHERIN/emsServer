// polymorphism 
// many-forms

// methods -name

// overloading - not support
// over-riding

// class A{
//     methoda(n){
//         this.n=n 
//         console.log("fist method");
//     }
//     methoda(){
//         console.log("second method");
//     }
// }
// obja=new A()
// obja.methoda() // second method
// obja.methoda(5) //first method

class Parent{
    buyphone(){
        console.log("buy nokia");
    }
}

class Child extends Parent{
    buyphone(){
        console.log("buy iphone");
    }
}

objc=new Child()
objc.buyphone()
