import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: Number,
            required: true
        },
        status: {
            type: Number,
            required: true,
            default: 1
        }
    }, { timestamp: true }
);

export const CategoryModel = mongoose.model('Category', schema)