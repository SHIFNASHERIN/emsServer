// class Calculator{
//     constructor(n1,n2){
//         this.n1=n1
//         this.n2=n2
//     }
//     add(){
//         console.log("add",this.n1+this.n2);
//     }
//     sub(){
//         console.log("sub",this.n1-this.n2); 
//     }
//     mult(){
//         console.log("mult",this.n1*this.n2); 
//     }
//     div(){
//         console.log("div",this.n1/this.n2); 
//     }
// }
// cal1=new Calculator(300,200)
// cal1.sub()
// cal1.div()


// Bank  - bank name,acno,name,balance(0)

// account creation -acno,name,   balance(0) - constructor
// deposit - amnt
// withdraw - amnt
// balance check 

class Bank{
    bankName="SBI"
    constructor(acno,name){
        this.acno=acno 
        this.name=name
        this.balance=0
        console.log(`hi ${this.name} . your ${this.bankName} account created successfully !! `);
    }
    deposit(amount){
        this.amount=amount
        this.balance=this.balance+this.amount
        console.log("your",this.bankName,"has been credited with amount",this.amount);
        console.log("balance in your account",this.balance);
    }
    withdraw(amnt){
        this.amnt=amnt
        if(this.amnt>this.balance){
            console.log("insufficient balance");
        }
        else{
            this.balance=this.balance-this.amnt
            console.log("your",this.bankName,"has been debited with amount",this.amnt);
            console.log("balance in your account",this.balance);
        }
    }
    balanceCheck(){
        console.log("balance in your account",this.balance);

    }
}
ac1=new Bank(765432198,"anu")
ac1.balanceCheck()
ac1.deposit(25000)
ac1.withdraw(500)
ac1.withdraw(30000)
ac1.withdraw(24500)




