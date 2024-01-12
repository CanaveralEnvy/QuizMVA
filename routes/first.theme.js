const router = require('express').Router();

const FirstTheme = require('../components/FirstTheme');
// const HeroesListPage = require('../components/HeroesListPage')

const { Question } = require('../db/models'); // берем вопросы с базы данных

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    const html = res.renderComponent(FirstTheme, {
      title: 'Questions Page',
      questions,
    });
    res.send(html);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
