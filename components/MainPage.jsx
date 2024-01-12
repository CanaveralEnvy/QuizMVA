const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, themes, user}) {
  return (
    <Layout title={title} user={user}>
    
     <h1>Самый лучший квиз</h1>
     <div className='container' style={{display: 'flex', margin:'100px'}}>
     
     {themes.map((theme) =>(
       <div className="card text-bg-dark" id="myDiv" style={{width:'900px', display: 'flex', margin:'10px', cursor: 'pointer'}} >
  <img src={theme.img} className="card-img" alt="..." /> 
  <div className="card-img-overlay">
    <h5 className="card-title" style={{color:'white', }}>{theme.name}</h5>
  </div>
</div>             ) )}
                 </div>

    </Layout> 
     );
    };

module.exports = MainPage

