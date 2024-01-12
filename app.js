require('@babel/register');
const express = require('express');
const app = express();

const NavBar = require('./components/NavBar');
const Layout = require('./components/Layout');
const React = require('react');
const Re = require('react-dom/server');
const ssr = require('./middleware/ssr')
const indexRouter = require('./routes/index.routes')

const PORT = 4000;

app.get('/', (req, res) => {
  const navbar = Re.renderToStaticMarkup(React.createElement(NavBar));
  res.send(`<!DOCTYPE html>${navbar}`);
});


app.use(express.urlencoded({extended: 'true'})) // middleware, который вскрыывает содержимое body в post
app.use(ssr)

app.use('/', indexRouter)

app.listen(PORT, () => {
  console.log('Server Up');
});