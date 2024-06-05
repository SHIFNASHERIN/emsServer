function addBook() {
    bookName = bname.value
    author = aid.value
    coverImg = cover.value

    if (bookName in localStorage) {
        alert("book already present")
    }
    else {
        book = { bookName, author, coverImg }
        localStorage.setItem(bookName, JSON.stringify(book))
        alert("book addedd successfully")
    }

}

function searchPage() {
    window.location = 'search.html'
}

function bookSearch() {
    book_name = bn.value
    if (book_name in localStorage) {
        bookDetails = JSON.parse(localStorage.getItem(book_name))

        result.innerHTML +=
            `<div class="card" style="width:25%;">
  <img src=${bookDetails.coverImg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Book Name ${bookDetails.bookName}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Author Name ${bookDetails.author}</li>
  </ul>
  </div>`

    }
    else {
        result.innerHTML = `<h1 class="text-danger">
        Book Is Not Found
        </h1>`
    }


}

