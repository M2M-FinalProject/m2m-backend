const router = require('express').Router();
const CategoryController = require("../controllers/categoryController")

router.get('/categories', CategoryController.getCategories)
router.post('/categories', CategoryController.createCategory)
router.put('/categories/:categoryId', CategoryController.updateCategory)
router.delete('/categories/:categoryId', CategoryController.deleteCategory)
module.exports = router;