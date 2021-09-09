import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        codeOrder: {
            type: String,
            default: null
        },
        product: [
            {
                name: {
                    type: String,
                    required: true
                },
                image: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                total: {
                    type: Number,
                    required: true,
                },
            }
        ],
        useId: {
            type: String,
            required: true,
        },
        nameUse: {
            type: String,
            required: true,
        },
        phoneUse: {
            type: String,
            required: true,
        },
        addressUse: {
            type: String,
            required: true,
        },
        status: {
            type: Number,
            default: 1
        },
    },
    { timestamp: true }
);

export const OrdersModel = mongoose.model('Order', schema);
