const React = require('react')
const Layout = require('./Layout')

function FirstTheme({ title }) {
    return (
     <Layout title={title}> 
     <h1>First Theme</h1>
    </Layout> 
     );
    };

    module.exports = FirstTheme