const router = require('express').Router()
const MainPage = require('../components/MainPage')

router.get('/', (req, res) => {
    const html = res.renderComponent(MainPage, {title: 'Main Page'})
    res.send(html)
})

module.exports = router