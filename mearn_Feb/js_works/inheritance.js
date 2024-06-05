// inheritance 
// single inheritance
// multiple
// multilevel

class A{        
    methoda(){  
        console.log("inside A class");
    }
}

class B extends A {  
    methodb(){
        console.log("inside B class");
    }
}

class C extends B{
    methodc(){
        console.log("inside C class");
    }
}
objc=new C()
objc.methodc()
objc.methodb()
objc.methoda()

