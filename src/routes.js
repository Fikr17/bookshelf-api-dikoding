import { addBook, getBook, getByIdBook, updateBook, deleteBook } from './handler.js'

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBook
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getByIdBook
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBook
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook
  }
]
export default routes
