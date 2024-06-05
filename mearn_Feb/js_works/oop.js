// object oriented programming 
// ---------------------------

// class -design pattern/blueprint 
// object -real-world entity
// reference - used to store objects


// class Person{
//     read(){
//         console.log("the person is reading");
//     }
//     walk(){
//         console.log("the person is walking");
//     }
// }

// pe=new Person()
// pe.walk()
// pe.read()

// pe1=new Person()
// pe1.read()
// pe1.walk()

// this  - instance keyword  - instance variable
// name     this.name
// class Person{
//     // pe1.setValues("anu",21,"kochi") 
//     setValues(name,age,place){   //name="anu"  age=21    loc="kochi"
//         this.name=name   //pe2.name="anu"
//         this.age=age
//         this.loc=place
//     }
//     printValues(){
//         console.log("name",this.name);
//         console.log("age",this.age);
//         console.log("place",this.loc);
//     }
// }

// pe1=new Person()
// pe1.setValues("anu",21,"kochi")
// pe1.printValues()

// pe2=new Person()
// pe2.setValues("amal",23,"calicut")


// a=[1,2,3]
// console.log(typeof(a));
// a.map()

// class Array{
//     push(){

//     }
//     sort(){

//     }
//     map(){

//     } 
//     // .............
// }


// Student   name,roll,dep

class Student{
    constructor(name,roll,dep){
        this.name=name
        this.roll=roll 
        this.dep=dep 
        this.college="abcd"
    }
    displayStudent(){
        console.log(this.name,this.roll,this.dep);
    }
}
st1=new Student("anu",1,"cse")
st1.displayStudent()
console.log(st1);

st1={ name: 'anu', roll: 1, dep: 'cse', college: 'abcd' }



// constructor  - to initialise a object at the same time of object creation



