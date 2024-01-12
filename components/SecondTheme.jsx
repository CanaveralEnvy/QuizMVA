const React = require('react')
const Layout = require('./Layout')

function SecondTheme({ title, user }) {
    return (
     <Layout title={title} user={user}> 
     <h1>Second Theme</h1>
    </Layout> 
     );
    };

    module.exports = SecondTheme