// object oriented programming 

// class  - design pattern/blue print/basic structure
// object - real world entity
// reference - to store objects(same as variable)

// methods atributes

// class Person{

//     reading(){   //method 1
//         console.log("person is reading");
//     }

//     walking(){ //method 2
//         console.log("person is walking");
//     }

// }

// pe1=new Person()
// pe1.walking()
// pe1.reading()
// pe1.walking()

// pe2=new Person()
// pe2.reading()
// pe2.walking()

// instance variable - this
// class Person{
// //  pe1.setValues("anu",23,"kochi")
//     setValues(name,age,location){
//         this.name=name
//         // pe1.name="anu"
//         this.age=age
//         this.place=location
//     }
//     dispalyData(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.place);
//     }
// }

// pe1=new Person()
// pe1.setValues("anu",23,"kochi")
// pe1.dispalyData()
// console.log(pe1);

// pe2=new Person()
// pe2.setValues("amal",23,"calicut")
// pe2.dispalyData()
// console.log(pe2);


// a=[1,2,3,4]
// a.map()
// console.log(typeof(a));


// class Array{
//     sort(){

//     }
//     map(){

//     }
// }


// student  -  roll , name ,dep

// class Student{
//     constructor(roll,name,dep){
//         this.roll=roll
//         this.name=name
//         this.dep=dep

//     }
//     dispayStudent(){
//         console.log(this.roll,this.name,this.dep);
//     }
// }
// st1=new Student(1,"anu","cse")
// // // st1.setStudent(1,"anu","ec")
// // st1.dispayStudent()

// // Employee 
// class Employee{
//     constructor(id,name,desig,salary){
//         this.id=id
//         this.name=name 
//         this.designation=desig
//         this.salary=salary
//     }
//     displayEmployee(){
//         console.log(this.id,this.name,this.designation,this.salary);
//     }
// }
// emp1=new Employee(1,"amal","developer",45000)
// emp1.displayEmployee()

// emp2=new Employee(2,"arun","developer",50000)
// emp2.displayEmployee()
// console.log(emp2);

// {
//     id: 2,
//     name: 'arun',
//     designation: 'developer',
//     salary: 50000
//   }

// ["anu","dev",56000]
// [1,4,6,7,8]



// add 
// class Add{
//     setValues(n1,n2){
//         this.n1=n1
//         this.n2=n2
//     }
//     display(){
//         this.sum=this.n1+this.n2
//         console.log(this.sum);
//     }
// }

// add1=new Add()
// add1.setValues(100,200)
// add1.display()

// constructure


// Bank 

// ac create   - name,acno  - constructor  - balance=0
// deposit  - amnt
// withdraw - amount


// class Bank{
//     constructor(name,acno){
//         this.name=name
//         this.acno=acno
//         this.balance=0
//     }
//     deposit(amnt){
//         this.amnt=amnt
//         this.balance=this.balance+this.amnt
//         console.log(this.name,"your ac has been credited with amount",this.amnt);
//         console.log("balance in your ac",this.acno,"is",this.balance);
//     }
//     withdraw(amt){
//         this.amt=amt
//         if(this.amt>this.balance){
//             console.log("insufficient balance");
//         }
//         else{
//             this.balance=this.balance-this.amt
//             console.log(this.name,"your ac has been debited with amount",this.amt);
//             console.log("balance in your ac",this.acno,"is",this.balance);
//         }
//     }
// }
// ac1=new Bank("anu",12345)
// ac1.withdraw(100)
// ac1.deposit(1000)
// ac1.withdraw(500)
// ac1.deposit(2000)


// Calculator 

// add 


// inheritance

// -used to access properties(methods and atributes) of one class to another class
// - single inheritance
// class A{  //parent class /super/base
//     methoda(){
//         console.log("inside A class");
//     }
// }

// class B extends A{  //child class/derived/sub
//     methodb(){
//         console.log("inside B class");
//     }
// }

// objb=new B()
// objb.methodb()
// objb.methoda()

// Person name,age location
// Student 

// - multiple inheritance
// class A
// class B
// class C extends A,B


// - multi-level inheritance (hybrid/hierarchial)

// class A{
//     methoda(){
//         console.log("inside A");
//     }
// }
// class B extends A{
//     methodb(){
//         console.log("inside B");
//     }
// }
// class C extends B{
//     methodc(){
//         console.log("inside C");
//     }
// }
// objc=new C()
// objc.methodc()
// objc.methodb()
// objc.methoda()




// oops
// class,object,reference
// constructors 
// inheritance (3 type)
// polymorphism

// method
// - method overloading - same method name and diff num of argmnts
// class A{
//     methoda(){  //0
//         console.log("first method");
//     }
//     methoda(n){ //1
//         this.n=n
//         console.log("second method",this.n);
//     }
// }
// obja=new A()
// obja.methoda()  //first method
// obja.methoda(6)  //second method 6

// - method over-riding - same method name same num of argmnt
// class Parent{
//     buyPhone(){
//         console.log("buy nokia ");
//     }
// }

// class Child extends Parent{
//     buyPhone(){
//         console.log("buy i phone");
//     }
// }

// ch1=new Child()
// ch1.buyPhone()

// encapsulation 
// abstraction
