const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
// const book = getBook(1);
// book;

// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book; // this is destructuring
// console.log(author, title, genres);

// // destructuring arrays
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // here we use the rest operator at the end 'otherGenres'
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, 'epic fantasy']; // the spread operator
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   moviePublicationDate: '2001-12-19',
//   // Overwriting an existing property
//   pages: 1210,
// };
// updatedBook;

// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
//   publicationDate.split('_')[0]
// }. The books has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;
// summary;

// // TEMPLATE LITERALS
// const regularString = 'regular string';
// const tempLit = `this is a template literal with some js(title): ${title}`;
// console.log(tempLit);

// // TERNARY OPERATOR
// const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
// console.log(`The book has ${pagesRange} pages`);

// // function getYear(str) {
// //   return str.split('-')[0];
// // }

// // ARROW FUNCTIONS
// const getYear = (str) => str.split('-')[0];

// console.log(getYear(publicationDate));

// // SHORT CIRCUITING AND LOGICAL OPERATORS
// console.log(true && 'Some string'); // && operator - if true - always returns the first value if true
// console.log(false && 'some string '); // just returns false if false
// console.log(hasMovieAdaptation && 'This book has a movie');

// // FALSY VALUES, 0, '', null, undefined, NaN, and the document.all object
// console.log('jonas' && 'Some string');
// console.log(0 && 'Some string');

// // or operator (||) - short circuits on the first value if the first is true
// console.log(true || 'Some string');
// console.log(false || 'Some string');
// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
// spanishTranslation;
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything?.reviewsCount || 'no data';
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? 'no data'; // nullish-operator : returns only second value if first i 'null' or 'undefined'

// OPTIONAL CHAINING
// function getTotalReviewCount(book) {
//   const goodRead = book.reviews.goodreads?.reviewsCount ?? 0;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0; // if librarything is undefined - js will not try to read the reviewsCound from this object

//   return goodRead + librarything;
// }

// console.log(getTotalReviewCount(book));

// ARRAY METHODS - FUNCTIONAL (does not mutate original array)

// const books = getBooks();
// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((b) => b.title); // array of the books titles
// console.log(titles);

// const essentialData = books.map((b) => {
//   return {
//     title: b.title,
//     author: b.author,
//     reviewsCount: getTotalReviewCount(b),
//   };
// });
// console.log(essentialData);

// const longBooks = books
//   .filter((b) => b.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// console.log(longBooks);

// const adventure = books
//   .filter((b) => b.genres.includes('adventure'))
//   .map((b) => b.title);
// console.log(adventure);

// // REDUCE
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);

// // sort method - for sorting - numerically, alphabetically etc. - this method alters the original array
// const y = [3, 7, 1, 9, 6];
// const sorted = y.slice().sort((a, b) => a - b);
// console.log(sorted);

// const sorted_two = y.slice().sort((a, b) => b - a);
// console.log(sorted_two);

// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
// console.log(sortedByPages);

// // WORKING WITH IMMUTABLE ARRAYS - not altering the original source

// // 1) Add a book object to array
// const newBook = {
//   id: 6,
//   title: 'Harry Potter and the Chamber of Secrets',
//   author: 'J.K. Rowling',
// };

// const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

// // 2) Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((b) => b.id !== 3);
// console.log(booksAfterDelete);

// // 3) Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((b) =>
//   b.id === 1 ? { ...b, pages: 1210 } : b
// );

// ASYNC JAVASCRIPT

// fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log('aleksander');

// async await
async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);
