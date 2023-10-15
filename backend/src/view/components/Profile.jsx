const React = require('react');

const Layout = require('../Layout');

module.exports = function LoginForm({ user }) {
  return (
    <Layout user={user}>
      <main>
        <div><h1>Profile</h1></div>
      </main>
    </Layout>
  );
};
