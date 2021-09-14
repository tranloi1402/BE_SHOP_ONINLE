import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        codeOrder: {
            type: String,
            required: true
        },
        product: [
            {
                image: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: String,
                    required: true,
                },
                quantity: {
                    type: String,
                    required: true,
                },
                _id: {
                    type: String,
                    required: true,
                }
            }
        ],
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
