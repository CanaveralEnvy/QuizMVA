const router = require('express').Router();
const MainPage = require('../components/MainPage');
const { theme } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await theme.findAll();
    const html = res.renderComponent(MainPage, {
      title: 'Main page',
      themes,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
