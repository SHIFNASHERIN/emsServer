// car={name:"Honda City",model:"Sedan",manufacture:"Honda",price:1400000,obj1:{1:2,9:34}}
// console.log(car);
// // display manufacture
// console.log(car.manufacture);

// // check model is present or not 
// console.log("model" in car);

// // add property variant  (manual/automatic)
// car.variant="manual"
// console.log(car);


// // add property colours  black grey white 
// car.colours=['grey','black','white']
// console.log(car);


// a=[10,20,30,30,20,10,10,20,30,20,20,20]
// count={}   //{10:1,20:1,30:1}
// a.map(n=>n in count?count[n]+=1:count[n]=1)
// console.log(count);

// {10:3,20:6,30:3}

// s="hello hi hello"
// n=s.split(" ")
// count={}
// // console.log(n);   //[ 'hello', 'hi', 'hello' ] 
// // {h1llo:2,hi:1}
// n.map(i=>i in count?count[i]+=1:count[i]=1)
// console.log(count);


s="ABCDABC"
// n=""
// ABCDABC
count={}  //{A:1,B:1,C:1,D:1}
for(i of s){   //i=A
    if(i in count){
        console.log("recursive element",i);
        break
        // n=n+i
    }
    else{
        count[i]=1
    }
}
// console.log(n);
