// st1={ college: 'luminar', name: 'anu', rollno: 1, dept: 'cse',name1:"anu" }

// array   ["amal",2,"kochi"]  [1,2,3,4,5]
// object

// console.log(st1);

// heterogeneous
// key - unique - not support duplication
// value - support duplication


// obj={}
// console.log(obj);

// // data add - key value
// obj["name"]="amal"
// obj.age=23

// console.log(obj);

// // data access
// console.log(obj["name"]);
// console.log(obj.age);

// // // delete data
// // delete obj.age
// // delete obj["name"]
// // console.log(obj);

// // update
// obj.age=24
// obj["name"]="anu s"
// console.log(obj);

// // obj.age=obj.age+5
// obj.age+=5
// console.log(obj);


// student={name:"anu",rollno:3,dept:"cse"}
// for(i in student){
//     console.log(student[i],i);
// }

// linear data structure
// console.log(student["name"]);

// check key present or not
// console.log("rollno1" in student);



// car={name:"Honda City",manufacture:"Honda",price:1500000}

// // find the car name
// console.log(car.name);
// // check manufacture present or not
// console.log("manufacture" in car);
// // increase the price by 100000
// // car.price=car.price+100000
// car.price+=100000
// console.log(car);
// // add property variant (manual / automatic)
// car["variant"]="automatic"
// console.log(car);
// // add property colours - (white,grey,black)
// car.colours=["white","grey","black"]
// console.log(car);


// obj={1:10,2:20,3:{5:50,6:60}}
// console.log(obj);

// console.log(typeof(obj));


// console.log(typeof(a));

// class Array{
//     map(){

//     }
//     filter(){

//     }
// }
// a=[1,2,3,4]
// a.map()

// a=[10,20,20,10,10,10,30]
// count={}    
// // for(i of a){  //i=10     //{10:4,20:2,30:1}
// //     if(i in count){
// //         count[i]+=1
// //     }
// //     else{
// //         count[i]=1
// //     }
// // }
// a.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);

// s="hello hi hello"
// a=s.split(" ")
// console.log(s.split(" "));

// s="Get started any way you want"
// console.log(s.split(" ").reduce((a,b)=>a.length>b.length?a:b));

// s="abcabcd"
// // recursive elmnts  - abc  
// // - first and last recursive elemnt in a string
// obj={}
// rec=""
// for(i of s){
//     if(i in obj){
//         rec=rec+i
//     }
//     else{
//         obj[i]=1
//     }
// }
// console.log(rec);



// s="hello hi hello luminar"
// // word count object  {hello:2,hi:1,luminar:1}   

// a=s.split(" ")
// count={}
// a.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);

// dsa




// {10:4,20:2,30:1}

// figma,tailwind