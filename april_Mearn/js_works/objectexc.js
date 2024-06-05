// // person={name:"amal",age:24,n1:{1:3,5:7}}
// // console.log(person);


// // console.log(person);

// // console.log(person["name"]);
// // console.log(person["age"]);

// // console.log(person.name);
// // console.log(person.age);

// // person["location"]="calicut"
// // console.log(person);

// // person.job="developer"
// // console.log(person);

// // person.age=26
// // person["location"]="kochi"
// // console.log(person);

// // // in
// // for(i in person){
// //     console.log(person[i]);
// // }

// // // key present or not 
// // console.log("job" in person);

// // car={brand:"Honda City",manufacture:'Honda',price:800000}

// // // find car brand
// // console.log(car.brand);
// // // check manufacture present or not
// // console.log("manufacture" in car);
// // // add variant  manual/automatic
// // car.variant="manual"
// // console.log(car);
// // // increase the price by 100000
// // car.price=car.price+100000
// // console.log(car);
// // // add availiable property colours  (black,grey,white)
// // car.colors=["black","grey","white"]
// // console.log(car);

// s="hello hi hello world"
// // {hello:2,hi:1,world:1}

// // count={}      //{hello:2,hi:1,world:1}
// // a=s.split(" ") 
// // console.log(a);   //[ 'hello', 'hi', 'hello', 'world' ]
// // a.map(word=>word in count?count[word]=count[word]+1:count[word]=1)
// // console.log(count);


// mobiles=[
//     {name:"nokia",nw:"4g",display:"lcd",price:25000},
//     {name:"oppo",nw:"4g",display:"lcd",price:15000},
//     {name:"apple",nw:"5g",display:"led",price:75000},
//     {name:"vivo",nw:"4g",display:"lcd",price:13000},
//     {name:"samsung",nw:"5g",display:"led",price:70000}
// ]
// console.log(mobiles);

// // find all mobile names
// console.log(mobiles.map(i=>i.name));
// console.log("________________________________________");

// // find mobiles with led display
// console.log(mobiles.filter(i=>i.display=="led").map(i=>i.name));
// console.log("________________________________________");

// // find  5g mobile prices
// console.log(mobiles.filter(i=>i.nw=='5g').map(i=>i.price));
// console.log("________________________________________");

// // find details of mobile with highest cost
// console.log(mobiles.reduce((n1,n2)=>n1.price>n2.price?n1:n2));
// console.log("________________________________________");


// // find 5g mobile name with lowest price
// console.log(mobiles.filter(i=>i.nw=='5g').reduce((i1,i2)=>i1.price<i2.price?i1:i2).name);
// console.log("________________________________________");

// // sort array with increasing order of price 
// console.log(mobiles.sort((n1,n2)=>n1.price-n2.price));

// console.log("________________________________________");

// // find total price sum
// console.log(mobiles.map(i=>i.price).reduce((a,b)=>a+b));


s="luminar technolab"
c={}
n=""
for(i of s){
    // console.log(i);
    if(i in c){
        n=n+i
    }
    else{
        c[i]=1
    }
}
console.log(n);
// nla

// first recursive   n
// last recursive    a

