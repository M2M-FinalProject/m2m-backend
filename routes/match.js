const matchRouter = require('express').Router();
const MatchController = require('../controllers/MatchController')

matchRouter.get('/', MatchController.getMatches)
matchRouter.get('/:matchId', MatchController.getMatchById)
matchRouter.post('/', MatchController.addMatch)
matchRouter.patch('/:matchId', MatchController.editStatusMatch)

module.exports = matchRouter