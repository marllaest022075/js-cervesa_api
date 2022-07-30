const Router = require('express').Router;
const router = new Router();

router.get('/', function (req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })
});

router.get('/:id', function (req, res) {
    res.json({ mensaje: '¡A beber cerveza! con id' })
});

router.post('/', function (req, res) {
    res.json({ mensaje: 'Método post' })
});

router.delete('/', function (req, res) {
    res.json({ mensaje: 'Método delete' })
});

module.exports = router;