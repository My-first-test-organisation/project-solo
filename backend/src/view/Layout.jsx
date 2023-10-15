const React = require('react');

const NavBar = require('./components/NavBar');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
