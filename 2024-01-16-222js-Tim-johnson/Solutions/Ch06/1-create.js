//create object using object literal notation

const book = {
    author: "Andrew Newman",
    title: "the elephant who tried to tiptoe",
    price: 9.99,
    pages: 30
};

console.log(`book`, book);

// create object saying new Object()

const book2 = new Object();

book2.author = "Dr. Kirby Surprise";
book2.title = "Synchronicity";
book2.price = 18.99;
book2.pages = 284;


// print it
console.log('book2 :>> ', book2);
// for loop to see properties

const bookArray = [book, book2];

for (let index = 0; index < bookArray.length; index++) {
    let author = bookArray[index].author;
    let title = bookArray[index].title;

    console.log(`At index[${index}], is ${title} by ${author}`);

}
