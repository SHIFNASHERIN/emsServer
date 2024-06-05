// single inheritance

// class A{  //parent/super/base
//     methoda(n){
//         this.n=n
//         console.log("inside A class");
//     }
// }

// class B extends A{  //child/sub/derived
//     methodb(){
//         console.log("inside B class",this.n);
//     }
// }

// objb=new B()
// objb.methoda(7)
// objb.methodb()


// class A{
//     methoda(){
//         console.log("inside A class");
//     }
// }

// class B extends A{
//     methodb(){
//         console.log("inside B class");
//     }
// }

// class C extends B{
//     methodc(){
//         console.log("inside C class");
//     }
// }
// objc=new C()
// objc.methodc()
// objc.methodb()
// objc.methoda()

// poly  
// manyforms
// methods

// overloading
// same method name with diff num of argmnts

// class A{
//     methoda(n){ //1
//         this.n=n
//         console.log("first method",this.n);
//     }
//     methoda(){ //0
//         console.log("second method");
//     }
// }

// obj=new A()
// obj.methoda() //2nd method
// obj.methoda(6)  //1st method

// same method name and same no of argmnts

class A{
    methoda(){ //0
        console.log("inside A");
    }
}

class B extends A{
    methoda(){ //0
        console.log("inside B");
    }
}

objb=new B()
objb.methoda()