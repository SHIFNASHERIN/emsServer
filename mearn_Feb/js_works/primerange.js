r1=10
r2=20
count=0
for(;r1<=r2;r1++){  //r1=5   2 3 4
    // console.log(r1);
    for(i=2;i<r1;i++){  
        count++
        //i=2
        if(r1%i==0){
            break
        }
    }
    if(i==r1){
        console.log(r1);
    }
}
console.log(count);


// r1=4