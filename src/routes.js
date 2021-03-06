const express = require('express');
const UserController = require('./controllers/UserController');
const router = express.Router();

router.get('/ping', (req, res) => {
    res.json({pong: true});
});

router.post('/signin', UserController.signin);
router.post('/signup', UserController.signup);
router.put('/user/:id', UserController.update);
router.get('/user/:nickname', UserController.info);
router.put('/user/:id/timegame/:timeGame', UserController.timeGame);
router.put('/user/:nickname/score/:score', UserController.score);
router.get('/ranking/:qtd', UserController.ranking);
router.get('/highscore', UserController.highScore);

module.exports = router;