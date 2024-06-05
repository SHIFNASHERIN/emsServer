fixedAmount=1000000
withdrawAmount=10000000000000
if(withdrawAmount<=fixedAmount){
    console.log("your ac has been debited with amount",withdrawAmount);
    console.log("balance is",fixedAmount-withdrawAmount);
    
}
else{
    console.log("insufficient balance");
}
console.log("happy banking");

