import express from 'express';

// category
import { getCate, createCate, updateCategory, editCate, deleteCategory } from '../controller/category.js';

// Products
import { getProduct, createProduct, editProduct, updateProduct, deleteProduct } from '../controller/product.js';

// Order
import { getAllOrder, createOrder, findeOneOrder, updateOrder } from '../controller/order.js';

const router = express.Router();

//category
router.get('/category', getCate);
router.post('/createCate', createCate);

router.get('/edit/:id', editCate);
router.post('/updateCategory', updateCategory);

router.post('/deleteCategory/:id', deleteCategory);

//Products
router.get('/product', getProduct);
router.post('/createProduct', createProduct);

router.get('/editProduct/:id', editProduct);
router.post('/updateProduct', updateProduct);

router.post('/deleteProduct/:id', deleteProduct);

// Order
router.get('/order', getAllOrder);
router.post('/createOrder', createOrder);

router.get('/findOrder/:id', findeOneOrder);

router.post('/updateOrder', updateOrder);

export default router;