const router = require('express').Router();

const { UserChannel } = require('../../../db/models');

router.post('/channels/:id', async (req, res) => {
  const { id } = req.params;
  const result = await UserChannel.create({
    userId: req.session.userId,
    channelId: id,
  });
  res.json({ message: 'success' });
});

router.delete('/phones/:id', async (req, res) => {
  const { id } = req.params;
  const result = await UserChannel.destroy({
    where: { channelId: id },
  });
  res.status(200).json({ message: 'success' });
});

module.exports = router;
