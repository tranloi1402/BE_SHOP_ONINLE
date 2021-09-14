import { OrdersModel } from '../models/OrdersModel.js';

export const getAllOrder = async (req, res) => {
    try {
        // const order = new OrdersModel({
        //     product: [
        //         {
        //             name: 'test1',
        //             image: 'tets1',
        //             price: 10,
        //             quantity: 2,
        //             total: 20,
        //         },
        //         {
        //             name: 'test2',
        //             image: 'tets2',
        //             price: 10,
        //             quantity: 2,
        //             total: 20,
        //         }
        //     ],
        //     codeOrder: 'MD1372',
        //     useId: 'AD10022',
        //     nameUse: 'Trần Đại Lợi',
        //     phoneUse: '0325810316',
        //     addressUse: 'thôn gia khánh',
        //     status: '2',
        // });
        // order.save();

        const orderAll = await OrdersModel.find();
        res.status(200).json(orderAll);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createOrder = async (req, res) => {
    try {
        const {
            addressUse,
            codeOrder,
            nameUse,
            phoneUse,
            product
        } = req.body;
        if (nameUse === '') {
            res.status(200).json('Bạn không được để tên trống!!!');
        }
        if (phoneUse === '') {
            res.status(200).json('Bạn không được để số điện thoại trống!!!');
        }
        if (addressUse === '') {
            res.status(200).json('Bạn không được để trống địa chỉ tên trống!!!');
        }

        const order = new OrdersModel({
            addressUse,
            codeOrder,
            nameUse,
            phoneUse,
            product,
            status : 1
        });
        const save = await order.save();
        console.log(save);
        res.status(200).json(save);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const findeOneOrder = async (req, res) => {
    try {
        const orderID  = req.params;
        const orderOne = await OrdersModel.findById({_id: orderID.id});
        res.status(200).json(orderOne);
    } catch (error) {
        res.status(500).json({ error: error });
        console.log(error);
    }
};

export const updateOrder = async (req, res) => {
    try {
        const updateOrder = req.body;
        const orderUpdate = await OrdersModel.findOneAndUpdate(
            {_id: updateOrder._id},
            updateOrder
        )
        res.status(200).json(orderUpdate);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
