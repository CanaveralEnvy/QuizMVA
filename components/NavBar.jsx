const React = require('react');
const navStyles = {display: 'flex', flexDirection: 'row', backgroundColor: '#e3f2fd;'}

function NavBar({user, scores}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navStyles}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item flex-grow-1"> 
              <a className="nav-link" aria-current="page">
                Hello {user}!
              </a>
            </li>
            <li className="nav-item flex-grow-1">
              <a className="nav-link" href="/">
                Main
              </a>
            </li>
            <li className="nav-item flex-grow-1">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Scores: {scores}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

module.exports = NavBar;
