import { ProductModel } from '../models/ProductModel.js';

export const getProduct = async (req, res) => {
    try {
        // const product1 = new ProductModel({
        //     name: 'test',
        //     description: 'testtesttesttesttesttesttest',
        //     image: 'test',
        //     price: '200000',
        //     categoryID: '22222',
        //     status: 1
        // });
        // product1.save();
        const product = await ProductModel.find();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        console.log(newProduct);
        const product = new ProductModel(newProduct);
        console.log(product);
        const a = await product.save();
        res.status(200).json(a);
    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
}

export const editProduct = async (req, res) => {
    try {
        const prodId = req.params;

        const editProductdata = await ProductModel.findById({_id: prodId.id});
        console.log(editProductdata);
        res.status(200).json(editProductdata);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const dataUpdate = req.body;
        console.log(dataUpdate);
        const updateProduct = await ProductModel.findOneAndUpdate(
            {_id: dataUpdate._id},
            dataUpdate,
        );
        console.log(updateProduct);
        res.status(200).send(updateProduct);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const prodId = req.params;

        const deleteProduct = await ProductModel.findOneAndDelete(
            {_id: prodId.id}
        );
        console.log(deleteProduct);
        res.status(200).json({message: 'Xóa sản phẩm thành công!!!'})
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
