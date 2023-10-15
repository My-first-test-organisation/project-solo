const React = require('react');

const Layout = require('../Layout');

module.exports = function AuthForm() {
  return (
    <Layout>
      <h1>Registration</h1>
      <form name="auth-form" action="">
        <div>FirstName:</div>
        <input type="text" name="firstName" /><br />
        <div>LastName:</div>
        <input type="text" name="lastName" /><br />
        <div>E-mail:</div>
        <input type="text" name="email" /><br />
        <div>Password:</div>
        <input type="password" name="password" autoComplete="on" /><br />
        <input type="submit" value="Submit" />
        <h1 style={{ color: 'red' }} className="error" />
      </form>
      <script defer src="/js/authFomr.js" />
    </Layout>
  );
};
