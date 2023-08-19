const catModel = require('../models/catModel');

const testController = {};

testController.createCat = async (req, res, next) => {
    console.log('CreateCat hit!')
    try {
        await catModel.create(req.body);
        return next();
    } catch (err) {
        return next ({
            status: 404,
        })
    }
}

testController.deleteCat = async (req, res, next) => {
    console.log('Delete cat hit')
    try {
        await catModel.deleteMany({});
        return next();
    } catch (err) {
        return next ({
            status: 404,
        })
    }
}

module.exports = testController;