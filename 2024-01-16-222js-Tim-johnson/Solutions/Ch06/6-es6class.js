class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return `${this.author} wrote ${this.title}`;
    }

}

const book1 = new Book("Bhagwat Gita - It's Essence","Munindra Misra");

console.log(`book1`, book1.toString());

   