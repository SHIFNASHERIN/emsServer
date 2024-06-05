fixedAmount=500000
withdrawAmount=5000001
if(withdrawAmount>fixedAmount){
    console.log("insufficient balance");
}
else{
    console.log("your ac has been debited with amount",withdrawAmount);
    console.log("balance is",fixedAmount-withdrawAmount);
}
