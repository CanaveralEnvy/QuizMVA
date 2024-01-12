const React = require('react');
const NavBar = require('./NavBar');

function Layout({title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        <script src="/js/script.js" /> 
      </head>
      <body>
        <NavBar/>{children}</body>
    </html>
  );
}

module.exports = Layout;