//create a Book constructor function
function Book(author, title, pages, price) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.price = price;

    this.displayTitleAuthor = function () {
        console.log(`${this.title} by ${this.author}`);
    };
}

let book1 = new Book(
    "John C. Maxwell",
    "Leadershift", 265, 27.99);

let book2 = new Book(
    "Adele Faber & Elaine Mazlish",
    "How to Talk so Kids Will Listen...", 345, 17.00);

//create an array - loop, have a function to print out a description of them

const books = [book1, book2];

// for (const book of books) {
//     console.log(`book`, book);
// }


for (const book of books) {
    book.displayTitleAuthor();
}

