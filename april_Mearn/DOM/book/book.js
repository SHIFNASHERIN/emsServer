function addBokk(){

    bookId=bid.value 
    bookName=bname.value 
    author=aid.value 
    descrip=desid.value

    if(bookId in localStorage){
        alert("book already exist")
    }
    else{
        book={bookId,bookName,author,descrip}
        // console.log(book);
        localStorage.setItem(bookName,JSON.stringify(book))
        alert("new book added")
    
    }


}

function searchPage(){
    window.location='search.html'

}

function search(){
    // access data from input
    bname=bn.value

    if(bname in localStorage){

        bookData=JSON.parse(localStorage.getItem(bname))
        
       result.innerHTML=`
       <ul>
       <li>book name ${bname}</li>
       <li>author name ${bookData.author}</li>
       <li> ${bookData.descrip} </li>
       </ul>
       ` 

    }
    else{
        result.innerHTML=`<h1 class="text-danger">
        book not present
        </h1>`
        // alert("book not present")
    }

}