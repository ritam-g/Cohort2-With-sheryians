import userModel from "../model/user.model.js";

export const createUser = async (req, res) => {
    try {

        const user = await userModel.create(req.body);

        res.status(201).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};