import { EvaluateModule } from '../models/EvaluateModel.js';

export const getAll = async (req, res) => {
    try {
        const idProduct = req.params;
        console.log(idProduct);
        const all = await EvaluateModule.find({ idProducts: idProduct.id });
        console.log(all);
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const createEvaluate = async (req, res) => {
    try {
        const data = req.body;
        console.log(data.idProducts);
        const updateEvaluate = await EvaluateModule.findOneAndUpdate(
            { idProducts: data.idProducts }, data
        );
        if (updateEvaluate === null) {
            console.log('create');
            const newEvaluate = new EvaluateModule(data);
            newEvaluate.save();
            res.status(200).json(newEvaluate);
        } else {
            console.log('update');
            res.status(200).json(updateEvaluate);
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
