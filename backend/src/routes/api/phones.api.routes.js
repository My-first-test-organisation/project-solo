const router = require('express').Router();
const { Phone } = require('../../../db/models');

router.get('/', async (req, res) => {
  try {
    const phones = await Phone.findAll({});
    res.json(phones);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  const { name, img } = req.body;
  console.log(req);
  try {
    const phon = await Phone.create({
      name,
      img,
    });
    res.json(phon);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  const editPhone = await Phone.findOne({ where: { id } });
  await editPhone.update(req.body);
  const updatePhone = await editPhone.save();
  res.status(201).json(updatePhone);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Phone.destroy({
    where: { id },
  });
  res.status(200).json({ message: 'success' });
});

module.exports = router;
