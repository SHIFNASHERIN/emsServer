// polymorphism

// many Forms

//method overloading  - same method name and diff num of argmnts
// class A{
//     methoda(){
//         console.log("first method");
//     }
//     methoda(n){
//         this.n=n 
//         console.log("second method",this.n);
//     }
// }

// a=new A()
// a.methoda()   //first method
// a.methoda(5)   //second method

//method overriding  - same method name and same num of argmnts

class A{
    methoda(){
        console.log("parent class");
    }
}
class B extends A{
    methoda(){
        console.log("Child class");
    }
}
b=new B()
b.methoda()


