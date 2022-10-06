const { Category, Match, Schedule } = require('../models')
const { all } = require('../routes')

class CategoryController{
    static getCategories(req, res, next){
        Category.findAll()
            .then((result)=>{
                res.status(200).json(result)
            })
            .catch((err)=>{
                next(err)
            })
    }

    static createCategory(req, res, next){
        const input = {
            name:req.body.name
        }
        Category.create(input)
            .then((result)=>{
                res.status(201).json(result)
            })
            .catch((err)=>{
                next(err)
            })
    }

    static updateCategory(req, res, next){
        const input = {
            name:req.body.name
        }
        const targetedId= req.params.categoryId
        Category.findOne({where:{id:targetedId}})
            .then((result)=>{
                if(!result){
                    throw{message:'Not Found'}
                }
                Category.update(input,{where:{id:result.id}})
            })
            .then(()=>{
                res.status(200).json({
                    message: 'success updating category'
                })
            })
            .catch((err)=>{
                next(err)
            })
    }

    static deleteCategory(req, res, next){
        const targetedId= req.params.categoryId
        Category.findOne({where:{id:targetedId},include:[Schedule, Match]})
            .then((result)=>{
                if(!result){
                    throw{message:'Not Found'}
                }
                if(result.Schedules.length != 0 && result.Matches.length != 0 ){
                    throw {message: 'This Category is used in registered Schedule or Match'}
                }
                Category.destroy({
                    where:{
                        id:targetedId
                    }
                })
                res.status(200).json({
                    message: 'success deleting category'
                })
            })
            .catch((error)=>{
                console.log(error);
                next(error)
            })
    }
}

module.exports = CategoryController