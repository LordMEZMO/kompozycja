const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
console.log(...books)

const compose = (...fns) => (x) => fns.reduce((prevFn, currFun) => currFun(prevFn), x);

const evenPages = (list) => list.filter((x) => x.pages%2 == 0);
const genreEndsWithY = (list) => list.filter((x) => x.genre.split("").reverse()[0] == "y");
const getTitles = (list) => list.map((x) => x.title);
const removeSpaces = (title) => title.map(title => title.split(" ").join(""));
const titleLetters = (title) => title.map((title) => title.length);

const z6 = compose(evenPages, genreEndsWithY, getTitles, removeSpaces, titleLetters);
console.log("Zadanie 6: "+z6(books))

const positiveRating = (list) => list.filter((book) => book.rating > 5);
const pagesOdd = (list) => list.filter((book) => book.pages%2 == 1);
const titleContainsNumber = (list) => list.filter((book) => /\d/.test(book.title));

const z7 = compose(positiveRating, pagesOdd, titleContainsNumber);
console.log("Zadanie 7: "+z7(books))

const bookTitles = (list) => list.map((book) => book.title);
const sortByLength = (titles) => titles.sort((a,b) => b.length-a.length);
const secondLongest = (titles) => titles[1];

const z8 = compose(bookTitles, sortByLength, secondLongest);
console.log("Zadanie 8: "+z8(books))
