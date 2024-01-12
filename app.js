require('@babel/register');
const express = require('express');
const app = express();
const NavBar = require('./components/NavBar');
const Layout = require('./components/Layout');
const React = require('react');
const Re = require('react-dom/server');

const PORT = 5000;

app.get('/', (req, res) => {
  const navbar = Re.renderToStaticMarkup(React.createElement(NavBar));
  res.send(`<!DOCTYPE html>${navbar}`);
});

app.listen(PORT, () => {
  console.log('Server Up');
});