// phones=[
//     {name:"nokia",nw:"4g",display:"lcd",price:12000},
//     {name:"samsung",nw:"5g",display:"led",price:45000},
//     {name:"oppo",nw:"4g",display:"lcd",price:7000},
//     {name:"vivo",nw:"4g",display:"lcd",price:10000},
//     {name:"apple",nw:"5g",display:"led",price:59000},
//     {name:"mi",nw:"4g",display:"lcd",price:15000}
 
// ]
// console.log(phones);

// // display all mobile names
// console.log(phones.map(i=>i.name));
// console.log("_____________________________________");

// // display details of 5g mobiles
// console.log(phones.filter(i=>i.nw=="5g"));
// console.log("_____________________________________");

// // find price of mobiles with lcd display
// console.log(phones.filter(i=>i.display=="lcd").map(i=>i.price));
// console.log("_____________________________________");

// // find mobile with lowest price
// console.log(phones.reduce((a,b)=>a.price<b.price?a:b).name);
// console.log("_____________________________________");


// // sort the mobiles in descending order of price
// console.log(phones.sort((a,b)=>b.price-a.price));
// console.log("_____________________________________");

// // find total number of mobiles
// console.log(phones.length);
// console.log("_____________________________________");

// // find total price of all mobiles-reduce
// console.log(phones.map(i=>i.price).reduce((a,b)=>a+b));
// console.log("_____________________________________");


// // check the availiability(present or not) of mobile with the given features
// // (nw=5g , display=led , price<50000)
// console.log(phones.some(i=>i.nw=="5g"&&i.display=="led"&&i.price<50000));

// const users=[
//     {id:100,first_name:"ram",email:"ram@gmail.com",dept:"sales",salary:25000},
//     {id:101,first_name:"ravi",email:"ravi@gmail.com",dept:"it",salary:28000},
//     {id:102,first_name:"raju",email:"raju@gmail.com",dept:"ba",salary:35000},
//     {id:103,first_name:"rahul",email:"rahul@gmail.com",dept:"devop",salary:45000},
//     {id:104,first_name:"akhil",email:"akhil@gmail.com",dept:"devop",salary:55000},
//     {id:105,first_name:"aravind",email:"aravind@gmail.com",dept:"qa",salary:65000},
//     {id:106,first_name:"ajay",email:"ajay@gmail.com",dept:"qa",salary:28000},

// ]

// console.log(users.find(i=>i.id==102).email);

var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "g-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
 
  ]

//   1.Print all gpay transactions?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.method=='g-pay'));
console.log(".......................................................");

//  2.print all transaction whose amount>3000?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.amount>3000));
console.log(".......................................................");

// 3.print credit transaction of account 1002?
console.log(accounts.map(i=>i.transactions).flat().filter(i=>i.to==1002));
console.log(".......................................................");

// 4.print debit transaction of account 1002?
console.log(accounts.find(i=>i.acno==1002).transactions);
console.log(".......................................................");

// 5.print highest balance ac details?
console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b));