const { Match,MatchDetail } = require('../models')

class MatchController {
    static async getMatches(req, res, next) {
        try {
            const data = await Match.findAll()
            res.status(200).json(data)
        } catch (error) {
            res.send(error)
        }
    }

    static async getMatchById(req, res, next) {
        try {
            const {matchId} = req.params
            const data = await Match.findByPk(matchId, {include : MatchDetail})
            res.status(200).json(data)
        } catch (error) {
            res.send(error)
        }
    }

    static async editStatusMatch(req,res,next){
        try {
            const {matchId} = req.params
            const { status } = req.body
            await Match.update({ status:status }, { where: {id:matchId} })
            res.status(204).json('Match Status Updated')
        } catch (error) {
            res.send(error)
        }
    }

    static async addMatch(req,res,next){
        try {
            const { name, location, date, CategoryId, capacity, currentCapacity } = req.body
            const createdMatch = await Match.create({ name, location, date, CategoryId, capacity, currentCapacity, status:1 })

            res.status(201).json(createdMatch)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = MatchController