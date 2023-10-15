const React = require('react');

const Layout = require('../Layout');

module.exports = function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Main page</h1>
    </Layout>
  );
};
