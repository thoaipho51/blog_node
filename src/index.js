

// Thư viện
var express = require('express')
var morgan = require('morgan')
var exhandlebar = require("express-handlebars").engine
var path = require('path')

//Khởi tạo
var app = express()


app.use(express.static(path.join(__dirname, 'public')))

//HTTP Log
app.use(morgan('combined'))

//Templates engine # dùng để tạo component code dạng như react
app.engine('hbs', exhandlebar({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: '+ __dirname);

// Đường dẫn
app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))
app.get('/', (req, res) => res.render('home'))



app.listen(3000, ()=> console.log(`Đường dẫn sau: http://127.0.0.1:3000/`))