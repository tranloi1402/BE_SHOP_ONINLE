import express from 'express';

// category
import { getCate, createCate, updateCategory, editCate, deleteCategory } from '../controller/category.js';

// Products
import { getProduct, createProduct, editProduct, updateProduct, deleteProduct, getSreachProduct } from '../controller/product.js';

// Evaluate
import { getAll, createEvaluate } from '../controller/evaluate.js';

// Order
import { getAllOrder, createOrder, findeOneOrder, updateOrder } from '../controller/order.js';

import { postLogin } from '../controller/admin.js';

const router = express.Router();

//category
router.get('/category', getCate);
router.post('/createCate', createCate);

router.get('/edit/:id', editCate);
router.post('/updateCategory', updateCategory);

router.post('/deleteCategory/:id', deleteCategory);

//Products
router.get('/product', getProduct);
router.get('/product/search', getSreachProduct);
router.post('/createProduct', createProduct);

router.get('/editProduct/:id', editProduct);
router.post('/updateProduct', updateProduct);

router.post('/deleteProduct/:id', deleteProduct);

// Evaluate
router.get('/evaluate/:id', getAll);
router.post('/create/evaluate', createEvaluate);


// Order
router.get('/order', getAllOrder);
router.post('/createOrder', createOrder);

router.get('/findOrder/:id', findeOneOrder);

router.post('/updateOrder', updateOrder);

// Acc Admin
router.post('/adminLogin', postLogin);

export default router;