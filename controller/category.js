import { CategoryModel } from '../models/CategoryModel.js';

export const getCate = async (req, res) => {
    try {
        const category = await CategoryModel.find();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createCate = async (req, res) => {
    try {
        const newCate = req.body;

        const category = new CategoryModel(newCate);
        console.log(category);
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const editCate = async (req, res) => {
    try{
        const cateID = req.params;
        console.log(cateID);
        const editCategory = await CategoryModel.findById({_id: cateID.id});
        res.status(200).json(editCategory);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updateCate = req.body;
        console.log(updateCate);
        const categoryUpdate = await CategoryModel.findOneAndUpdate({_id: updateCate._id}, updateCate);
        res.status(200).json(categoryUpdate);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ error: error });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const deleteCategoryId = req.params;
        console.log(deleteCategoryId.id);
        const categoryDleted = await CategoryModel.findOneAndDelete({ _id: deleteCategoryId.id});
        console.log(categoryDleted);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
