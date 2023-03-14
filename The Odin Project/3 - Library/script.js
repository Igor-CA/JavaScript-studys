let myLibrary = []

function Book(title, author, numberPages, read){
    this.title = title
    this.author = author
    this.numberPages = numberPages
    this.read = (read === true)?'Read':'Not read'
}

Book.prototype.printInfo = function(){
    return (this.read === true)?
        `${this.title} by ${this.author}, ${this.numberPages} pages, already read`:
        `${this.title} by ${this.author}, ${this.numberPages} pages, already read`  
}

Book.prototype.createHtml = function(){
    let library = document.querySelector('#library')
    let bookDiv = document.createElement('div')
    bookDiv.classList += 'book'
    bookDiv.innerHTML = 
    `
        <p>${this.title}</p>
        <p>${this.author}</p>
        <p>${this.pages}</p>
        <p>${this.read}</p>
        <input type="button" value="${this.read}" class="read">
        <input type="button" value="remove" class="remove">
    `
    library.appendChild(bookDiv)
}

function addBookToLibrary(){
    let name = prompt()
    let author = prompt()
    let pages = prompt()
    let read = confirm()
    let book = new Book(name, author, pages, read)
    myLibrary.push(book)
}

let kaguya = new Book('kaguya', 'Aka Akasaka', 225, true)