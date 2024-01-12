const React = require('react');

const NavBar = require('./NavBar');
const scores = 0;

function Layout({ title, children, user}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
          rel="stylesheet"
        ></link>
        {/* <script src="/js/script.js" /> */}
      </head>
      <body>
        <NavBar scores = {scores} user={user}/>
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
