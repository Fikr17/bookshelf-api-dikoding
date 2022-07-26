import { nanoid } from 'nanoid'
import books from './books.js'

const addBook = (req, res) => {
  const ambilData = req.payload
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = ambilData
  if (name == null) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  }
  const createdAt = new Date().toISOString()

  const id = nanoid(16)
  const finished = pageCount === readPage
  const insertedAt = createdAt
  const updatedAt = createdAt
  const tambahKeArray = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt
  }
  books.push(tambahKeArray)
  const isSuccess = books.filter((book) => book.id === id).length > 0
  if (readPage > pageCount) {
    const response = res.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    response.code(400)
    return response
  }
  if (isSuccess) {
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response
  }
  const response = res.response({
    status: 'error',
    message: 'Buku gagal ditambahkan'
  })
  response.code(500)
  return response
}

const getBook = (req, res) => {
  const query = req.query
  const key = Object.getOwnPropertyNames(query)

  if (books.length <= 0) {
    const response = res.response({
      status: 'success',
      data: {
        books: []
      }
    })
    response.code(200)
    return response
  } else {
    let isiCode = ''
    let responObj = {}
    if (key.length <= 0) {
      const d = []
      books.forEach((e) => {
        d.push({
          id: e.id,
          name: e.name,
          publisher: e.publisher
        })
      })
      responObj = {
        status: 'success',
        data: {
          books: d
        }
      }
      isiCode = 200
    } else {
      let responObj2 = {}
      let isiCode2 = ''
      key.forEach((a) => {
        if (a === 'name' || a === 'reading' || a === 'finished') { // disini
          let filteredBooks = books

          if (query.name !== undefined) {
            filteredBooks = filteredBooks.filter((book) => book.name.toLowerCase().includes(query.name.toLowerCase()))
          }

          if (query.reading !== undefined) {
            filteredBooks = filteredBooks.filter((book) => book.reading === !!Number(query.reading))
          }

          if (query.finished !== undefined) {
            filteredBooks = filteredBooks.filter((book) => book.finished === !!Number(query.finished))
          }
          responObj2 = {
            status: 'success',
            data: {
              books: filteredBooks.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher
              }))
            }
          }
          isiCode2 = 200
        } else {
          responObj2 = {
            status: 'fail',
            message: 'parameter:' + a + ' tidak tersedia'
          }
          isiCode2 = 404
        }
      })
      responObj = responObj2
      isiCode = isiCode2
    }
    const response = res.response(responObj)
    response.code(isiCode)
    return response
  }
}

const getByIdBook = (req, res) => {
  const { bookId } = req.params
  const book = books.filter((b) => b.id === bookId)[0]
  console.log(book)
  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book
      }
    }
  }

  const response = res.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  })
  response.code(404)

  return response
}

const deleteBook = (req, res) => {
  const { bookId } = req.params

  const index = books.findIndex((b) => b.id === bookId)

  if (index !== -1) {
    books.splice(index, 1)
    const response = res.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
    response.code(200)
    console.log(books)
    return response
  }

  const response = res.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  })
  response.code(404)

  return response
}

const updateBook = (req, res) => {
  const { bookId } = req.params
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload
  const updatedAt = new Date().toISOString()
  const index = books.findIndex((e) => e.id === bookId)

  if (index !== -1) {
    if (name === undefined) {
      const response = res.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400)

      return response
    }

    if (pageCount < readPage) {
      const response = res.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)

      return response
    }

    const finished = (pageCount === readPage)

    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt
    }

    const response = res.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
    response.code(200)

    return response
  }

  const response = res.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  })
  response.code(404)

  return response
}
export { getBook, addBook, deleteBook, getByIdBook, updateBook }
