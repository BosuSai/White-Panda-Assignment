const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/product.controller');
router.get('/test', product_controller.test);
router.post('/findcars', product_controller.find_car);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
router.post('/:id/bookcar', product_controller.car_book);

module.exports = router;