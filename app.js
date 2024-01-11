require('@babel/register');
const express = require('express');
const app = express();
const ssr = require('./middleware/ssr')
const indexRouter = require('./routes/index.routes')

const PORT = 4000;

app.use(express.urlencoded({extended: 'true'})) // middleware, который вскрыывает содержимое body в post
app.use(ssr)

app.use('/', indexRouter)
app.listen(PORT, () => {
  console.log('Server Up');
});