const express = require("express");
const router = express.Router()
const ProductController = require("../controllers/ProductController");
const { authMiddleware } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', authMiddleware, ProductController.updateProduct)//test
router.get('/get-details/:id', ProductController.getDetailsProduct)
router.delete('/delete/:id', authMiddleware, ProductController.deleteProduct)
router.get('/get-all', ProductController.getAllProduct)
router.post('/delete-many', authMiddleware, ProductController.deleteMany)
router.get('/get-all-type', ProductController.getAllType)
router.get('/get-all-price', ProductController.getAllPrice)

module.exports = router