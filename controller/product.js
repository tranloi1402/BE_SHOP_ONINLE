import { ProductModel } from '../models/ProductModel.js';

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.find();
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getSreachProduct = async (req, res) => {
    try {
        const keyword = req.query.keyword
        ? {
            name: {
                $regex: req.query.keyword,
                $options: 'i',
            }
        }
        : {}
        console.log(keyword);
        const product = await ProductModel.find({ ...keyword });
        console.log(product);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const product = new ProductModel(newProduct);
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
        res.status(200).json(editProductdata);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const dataUpdate = req.body;
        const updateProduct = await ProductModel.findOneAndUpdate(
            {_id: dataUpdate._id},
            dataUpdate,
        );
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
        res.status(200).json({message: 'Xóa sản phẩm thành công!!!'})
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
