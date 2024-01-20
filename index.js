// Nạp thằng express vào code để sử dụng
const express = require('express')

const app = express()

app.get('/', function (req, res) {

  var a = 1
  var b = 2
  var c = a + b

  res.send('Hello World')
})

app.get('/home', (req, res) => res.send('Trang Chủ'))
app.get('/product', (req, res) => res.send('Sản Phẩm'))
app.get('/news', (req, res) => res.send('Tin tức'))


app.listen(3000, ()=> console.log(`Đường dẫn sau: http://127.0.0.1:3000/`))