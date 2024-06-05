console.log(1); //- sync
console.log(2); //-sync

setTimeout(()=>{ //async
console.log(4);
},2000)

// api  -async

console.log(3); //-sync

// setTimeout,dom events,api calls
