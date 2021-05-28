const books = require('./books');

const getBooks = () => ({
  status: 'success',
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
  code: 200,
});
module.exports = getBooks;
