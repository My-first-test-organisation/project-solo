const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/channels">Channel</a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/channels/users">My Channel</a>
                </li>
                <li>
                  <p className="nav-link active" aria-current="page">{`Hello ${user.name}`}</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/api/logout">Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/register">Registration</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
