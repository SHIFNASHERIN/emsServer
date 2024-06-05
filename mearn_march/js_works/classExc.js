// class 
// class contain  methods and variables


// class Person{

//     walk(){
//         console.log("person is walking");
//     }

//     read(){
//         console.log("person is reading");
//     }

// }

// obj=new Person()
// obj.read()
// obj.walk()
// obj.walk()

// obj1=new Person()
// obj1.walk()

// this - instance keyword


// class Person{
//     setPerson(name,place,age){
//         this.name=name
//         this.loc=place
//         this.age=age
//     }
//     printPerson(){
//         console.log("person details",this.name,this.loc,this.age);
//     }
// }

// pe1=new Person()
// pe1.setPerson("anu","kochi",23)
// pe1.printPerson()

// pe2=new Person()
// pe2.setPerson("amal","calicut",25)
// pe2.printPerson()

// Employee  id,name,desig,sal

class Employee{
    //emp.setEmp(123,"amal","dev",45000)

    setEmp(id,name,desig,sal){
        this.id=id   //emp.id=123
        this.name=name //emp.name=amal
        this.desig=desig
        this.sal=sal
    }
    displayEmp(phn){
        this.phn=phn
        console.log(this.id,this.name,this.desig,this.sal,this.phn);
    }
}

emp=new Employee()
emp.setEmp(123,"amal","dev",45000)
                                // [123,"amal","dev",45000]
console.log(emp);             //{ id: 123, name: 'amal', desig: 'dev', sal: 45000 }
// emp.displayEmp(9123456789)

// constructor 
// to initialize an object at the time of object creation

// class Student{
//     constructor(name,dep){
//         // console.log("hi");
//         this.name=name
//         this.roll=5
//         this.dep=dep
//     }
//     displayData(){
//         console.log(this.name,this.roll,this.dep);
//     }

// }

// st1=new Student("anu","cse")
// st1.displayData()



// bank 
// ac_creation - constructor -name,acno
// deposit - amount 
// withdraw - amount
// 

// class Bank {
//     constructor(name, acno) {
//         this.name = name
//         this.acno = acno
//         this.balance = 0
//         console.log("ac created successfully");
//     }
//     deposit(amount) {
//         this.amount = amount
//         this.balance = this.balance + this.amount
//         console.log("your ac has been credited with amount", this.amount);
//         console.log("your current ac balance is", this.balance);
//     }
//     withdraw(amnt) {
//         this.amnt = amnt
//         if (this.amnt > this.balance) {
//             console.log("insuff ac balance");
//         }
//         else {
//             this.balance = this.balance - this.amnt
//             console.log("your ac has been debited with amount", this.amnt);
//             console.log("your current ac balance is", this.balance);
//         }
//     }
// }

// ac1=new Bank("anu",12345)
// ac1.withdraw(500)
// ac1.deposit(10000)
// ac1.withdraw(300)
// ac1.withdraw(9700)