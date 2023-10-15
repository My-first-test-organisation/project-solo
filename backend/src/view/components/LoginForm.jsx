const React = require('react');

const Layout = require('../Layout');

module.exports = function LoginForm() {
  return (
    <Layout>
      <h1>Login</h1>
      <form name="login-form" action="">
        <div>E-mail:</div>
        <input type="text" name="email" /><br />
        <div>Password:</div>
        <input type="password" name="password" autoComplete="on" /><br />
        <input type="submit" value="Submit" /><br />
        <h1 style={{ color: 'red' }} className="error" />
      </form>
      <script defer src="/js/loginForm.js" />
    </Layout>
  );
};
