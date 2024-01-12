const router = require('express').Router();
const MainPage = require('../components/MainPage');
const { Theme } = require('../db/models');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const user = await User.findOne({ where: { id: 1 } });
    res.app.locals.user = user;
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