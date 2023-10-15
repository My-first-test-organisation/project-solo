const router = require('express').Router();

const { UserChannel, Channel, Likee } = require('../../../db/models');

const Channels = require('../../view/components/Channel');

router.get('/', async (req, res) => {
  try {
    let channelsUser;
    let arrChannelsId;
    if (req.session.userId) {
      channelsUser = await Channel.findAll({
        attributes: ['id'],
        include: {
          model: UserChannel,
          where: { userId: req.session.userId },
        },
      });
      arrChannelsId = await channelsUser.map((item) => item.id);
    }
    const channels = await Channel.findAll({ order: [['name', 'ASC']], include: Likee });

    res.send(res.renderComponent(Channels, { title: 'Channel page', channels, arrChannels: arrChannelsId }));
  } catch (error) {
    console.log(error);
  }
});

router.get('/users', async (req, res) => {
  try {
    const channels = await Channel.findAll({
      order: [['name', 'ASC']],
      attributes: ['name', 'img', 'id'],
      include: {
        model: UserChannel,
        where: { userId: req.session.userId },
      },

    });
    const userRender = true;
    const { userId } = req.session;
    res.send(res.renderComponent(Channels, {
      title: 'UserChannel page', channels, userId, userRender,
    }));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
