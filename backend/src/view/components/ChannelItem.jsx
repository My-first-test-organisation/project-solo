const React = require('react');

function ChannelItem({
  channel,
  user,
  userRender,
  arrChannels,
}) {
  let content;
  if (arrChannels && !userRender) {
    content = <h4>Вы подписаны!</h4>;
  }
  const likeUser = channel.Likees.find((like) => like.dataValues.userId === user.id);
  return (
    <div data-id={channel.id} data-userid={user.id} className="card" style={{ width: '18rem' }}>
      <img src={channel.img} className="card-img-top" alt="Channel" />
      <div className="card-body">
        <h5 className="card-title">{channel.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div>
          <img className="like" src={likeUser ? ('img/like-full.png') : ('img/like-empty.png')} alt="like" />
          <p className="count">{channel.Likees.length}</p>
        </div>
        {content ?? (
          userRender
            ? (<button type="button" className="btn btn-primary btn-delete">Unsubscribe</button>) : (
              <button type="button" className="btn btn-primary btn-add">Subscribe</button>
            )
        )}
      </div>
    </div>
  );
}

module.exports = ChannelItem;
// (<button type="button" className="btn btn-primary btn-delete">Unsubscribe</button>)
