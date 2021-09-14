import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        idProducts: {
            type: String,
            required: true
        },
        evaluate: [
            {
                name: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                stars: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
);

export const EvaluateModule = mongoose.model('Evaluate', schema);