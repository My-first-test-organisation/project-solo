const router = require('express').Router();

const { Likee } = require('../../../db/models');

router.put('/:id', async (req, res) => {
  if (req.session.userId) {
    const { id } = req.params;
    // Check Like
    const checkLike = await Likee.findOne({
      where: {
        channelId: id,
        userId: req.session.userId,
      },
    });
    // Delete Like
    let result;
    if (checkLike) {
      await Likee.destroy({ where: { id: checkLike.id, userId: req.session.userId } });
      res.status(201).json({ message: 'dislike' });
    }
    // Add Like
    if (!checkLike) {
      result = await Likee.create({
        channelId: id,
        userId: req.session.userId,
      });
      res.status(201).json({ message: 'like' });
    }
  }
});

module.exports = router;
