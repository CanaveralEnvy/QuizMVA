const React = require('react')
const Layout = require('./Layout')


function FirstTheme({ title, questions, theme_id, user }) {
    return (
     <Layout title={title}> 
     <h1 style={{display: 'flex', justifyContent: 'center'}}>Фильмы по кадрам</h1>

     <div className='container'>
     {questions.map((question) => (
          <div className="card" style={{width: '1600px'}}>
          
          <img src={question.img} className="card-img-top" alt="question" />
          <div className="card-body">
            <h5 className="card-title">{question.content}</h5>
            
          </div>
          <div className="card-body">
           <input type="text" />
           <button>Подтвердить</button>
          </div>
        </div>
     ))}
   </div>
    </Layout> 
     );
    };

    module.exports = FirstTheme