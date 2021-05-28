const books = require('./books');

const getBooks = (request, h) => {
  // [Optional] 1: Query
  const { name, reading, finished } = request.query;
  let queryBook = books;

  if (name !== undefined) {
    queryBook = queryBook.filter((item) => item.name.toLowercase().includes(name.toLowercase()));
  }

  if (reading !== undefined) {
    queryBook = queryBook.filter((item) => item.reading === !!Number(reading));
  }

  if (finished !== undefined) {
    queryBook = queryBook.filter((item) => item.finished === !!Number(finished));
  }

  const response = h.response({
    status: 'success',
    data: {
      books: queryBook.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};
module.exports = getBooks;
