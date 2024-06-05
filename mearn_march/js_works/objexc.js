// emp={ id: 123, name: 'amal', desig: 'dev', sal: 45000 ,nest1:{2:100,9:300}}

// emp["sal"]+=5000
// console.log(emp);

// // value access
// console.log(emp['id']);

// console.log(emp.name);

// // add new data

// emp['age']=28
// emp.location="kochi"

// console.log(emp);

// // update
// emp['name']='amal v'
// emp.age=32
// console.log(emp);

// // key check
// console.log("desig1" in emp);

// // loop
// for(key in emp){
//     console.log(emp[key]);
// }


// car={name:"Honda City",model:"sedan",manufacture:'honda',price:1400000}

// // display manufacture
// console.log(car.manufacture);

// // check model is present or not
// console.log('model' in car);

// // add property varient  (automatic/manual)
// car.varient='automatic'
// console.log(car);

// // add colours (black,grey,white)
// car.colours=['black','grey','white']
// console.log(car);


// s="hello hi hello"
// a=s.split(' ')
// console.log(a);
// count={}
// a.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);

// {hello:2,hi:1}

// s="hello hi luminar"
// console.log(s.split(" ").reduce((n1,n2)=>n1.length>n2.length?n1:n2))

s="malayalam"   //aalam
count={}
repeat=""
for(i of s){  //i=a
    if(i in count){
        // console.log(i);
        // break
        repeat+=i
    }
    else{
        count[i]=1   //count={a:1,b:1,c:1,d:1}
    }
}
console.log("first recursive",repeat[0]);
console.log("second recursive",repeat[1]);
console.log("last recursive",repeat[repeat.length-1]);

