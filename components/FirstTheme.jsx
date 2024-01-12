const React = require('react')
const Layout = require('./Layout')

function FirstTheme({ title, questions }) {
    return (
     <Layout title={title}> 
     <h1>First Theme</h1>
     {questions.map((question) => <div key={question.id}></div>
      <h5>{question.name}</h5>
     <h5>{question.description}</h5>
     <img src={question.img} alt='question' />
     </div>)}
    </Layout> 
     );
    };

    module.exports = FirstTheme