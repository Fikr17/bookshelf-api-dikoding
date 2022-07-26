// tes sebagai pengakses CORS
const xmlHttp = new XMLHttpRequest()
xmlHttp.onload = function () {
  console.log(this.responseText)
}
xmlHttp.open('GET', 'http://localhost:5000/books')
xmlHttp.send()
