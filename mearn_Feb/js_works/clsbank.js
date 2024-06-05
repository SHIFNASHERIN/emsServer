// Bank 
// ac creation  -constructor  -name ,acno 
// deposit  - amnt 
// withdraw -  amt


class Bank{
    constructor(name,acno){
        this.name=name 
        this.acno=acno
        this.balance=0
    }
    deposit(amnt){
        this.amnt=amnt
        this.balance=this.balance+this.amnt
        console.log("your ac has been credited with amount",this.amnt);
        console.log("balance is",this.balance);
    }
    withdraw(amt){
        this.amt=amt
        if(this.amt<=this.balance){
            this.balance=this.balance-this.amt
            console.log("your ac has been debited with amount",this.amt);
            console.log("balance is",this.balance);

        }
        else{
            console.log("insufficient balance");
        }
    }
}

ac1=new Bank("anu",123)
ac1.withdraw(1000)
ac1.deposit(2000)
ac1.deposit(3000)
ac1.withdraw(500)
ac1.withdraw(555500)

// class
// object
// reference
// constructor
// inheritance
// polymorphism
// encapsulation
// abstraction

