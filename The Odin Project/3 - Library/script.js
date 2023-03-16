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
    this.bookDiv = document.createElement('div')
    this.bookDiv.classList += 'book'
    this.bookDiv.innerHTML = 
    `
        <h2>${this.title}</h2>
        <p>${this.author}</p>
        <p>${this.numberPages}</p>
        <input type="button" value="${this.read}" class="read">
        <input type="button" value="remove" class="remove">
    `
    library.appendChild(this.bookDiv)
}
Book.prototype.addListeners = function(){
    
    let readButtom = this.bookDiv.querySelector(".read")
    readButtom.addEventListener('click',()=>{
        (readButtom.value === 'Read')? readButtom.value = 'Not read' 
                                     : readButtom.value = 'Read'
    })
    
    let removeBtn = this.bookDiv.querySelector(".remove")
    removeBtn.addEventListener('click', ()=>{
        this.bookDiv.style.display = 'none'
        let index = myLibrary.indexOf(this)
        myLibrary.splice(index, 1)
    })
}




let newBookBtn = document.querySelector('#add');
let closeFormBtn = document.querySelector('#closeForm');
let addBookBtn = document.querySelector('#confirmAdd');

function displayForm(){
    let form = document.querySelector('#form')
    form.classList.toggle('invisible')
}

function closeForm(){
    let form = document.querySelector('#form')
    form.classList.toggle('invisible')
}

function addBookToLibrary(){
    let nameInput = document.querySelector('#name')
    let authorInput = document.querySelector('#author')
    let pagesInput = document.querySelector('#pages')
    let readInput = document.querySelector('#status')

    let name = nameInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let read = readInput.checked

    nameInput.value = null
    authorInput.value = null
    pagesInput.value = null
    readInput.checked = null

    let book = new Book(name, author, pages, read)
    myLibrary.push(book)
    book.createHtml()
    book.addListeners()
    closeForm()
}

newBookBtn.addEventListener('click',displayForm);
closeFormBtn.addEventListener('click', closeForm);
addBookBtn.addEventListener('click', addBookToLibrary);




let kaguya = new Book('kaguya', 'Aka Akasaka', 225, true)