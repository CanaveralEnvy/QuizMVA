// const router = require('express').Router()

// const HeroPage = require('../components/HeroPage')
// const HeroesListPage = require('../components/HeroesListPage')

// const {Hero} = require('../db/models') // берем героев с базы данных

// router.get('/', async (req, res) => {
//    try {
//     const heroes = await Hero.findAll()
//     const html = res.renderComponent(HeroesListPage, {title: 'Heroes Page', heroes})
//     res.send(html)
//    } catch ({message}) {
//     res.json({message})
//    }
// })

// router.get('/:heroId', (req, res) => {
//     const html = res.renderComponent(HeroPage, {title: 'Hero Page', heroId})
//     res.send(html)
// })

// module.exports = router