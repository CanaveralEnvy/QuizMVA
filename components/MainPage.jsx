const React = require('react')
const Layout = require('./Layout')


function MainPage({ title, themes }) {
    return (
     <Layout title={title}> 
     <h1>Heroes</h1>
            {themes.map((theme) =>(
                 <div key={theme.id}>
                <h5>{theme.name}</h5>
                <h5>{theme.description}</h5>
                <img src={theme.img} alt="hero" />
            </div>) )}
    </Layout> 
     );
    };

    module.exports = MainPage