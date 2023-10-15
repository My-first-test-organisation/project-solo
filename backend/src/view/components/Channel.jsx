const React = require('react');

const Layout = require('../Layout');
const ChannelItem = require('./ChannelItem');

function Channel({
  title, channels = [], user = '', userRender = false, arrChannels = [],
}) {
  // console.log(channels);
  return (
    <Layout title={title} user={user}>
      <h1>Channels page!</h1>
      <div className="channel-list">
        {channels.map((channel) => (
          <ChannelItem
            channel={channel}
            user={user}
            userRender={userRender}
            arrChannels={arrChannels.includes(channel.id)}
          />
        ))}
      </div>
      <script src="/js/script.js" />
    </Layout>
  );
}

module.exports = Channel;
