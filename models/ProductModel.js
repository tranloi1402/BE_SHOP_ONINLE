import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        categoryID: {
            type: String,
            required: true
        },
        status: {
            type: Number,
            required: true,
            default: 1
        }
    },
    { timestamp: true }
);

export const ProductModel = mongoose.model('Product', schema);
