import { AdminModel } from '../models/AdminModel.js';

export const postLogin = async (req, res) => {
    try {
        const creatAcc = req.body;

        const findAcc = await AdminModel.findOne(
            { email: creatAcc.email, password: creatAcc.password }
        );
        console.log(findAcc);
        if (findAcc !== null) {
            res.status(200).json(findAcc);
        } else {
            res.status(200).json('fail');
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}