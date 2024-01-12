const React = require('react');

const navStyles = {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'lightBlue',
};
const itemStyles = {
  color: 'indigo',
  fontSize: '40px',
  fontFamily: 'IBM Plex Mono, sans-serif',
};
const mainStyle = {
  color: 'darkOrange',
  fontSize: '40px',
  fontFamily: 'IBM Plex Mono, sans-serif',
};

function NavBar({ scores, user }) {
  return (
    <nav className="navbar navbar-expand-lg" style={navStyles}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item flex-grow-1">
              {user ? (
                <a className="nav-link" aria-current="page" style={itemStyles}>
                  Hello, {user.name}!
                </a>
              ) : (
                <a className="nav-link" aria-current="page" style={itemStyles}>
                  Hello!
                </a>
              )}
            </li>
            <li className="nav-item flex-grow-1">
              <a className="nav-link" href="/" style={mainStyle}>
                Main
              </a>
            </li>
            <li className="nav-item flex-grow-1">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
                style={itemStyles}
              >
                Scores: {scores}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
