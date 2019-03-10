const models = require('../../models');

let _bindModel = (data) => {
    let {
        firstName,
        lastName,
        phoneNumber,
        email
    } = data;
    let model = {
        firstName,
        lastName,
        phoneNumber,
        email
    };
    return model;
};

const createRider = async (rider) => {
    const _rider = _bindModel(rider);
    const newrider = await models.rider.create(_rider);
    return newrider;
}

const getRiderById = async (id) => {
    const rider = await models.rider.findById(id);
    return rider;
}

const getAllRiders = async () => {
    const riders = await models.rider.findAll();
    return riders;
}

const updateRider = async (id, rider) => {
    const _rider = _bindModel(rider);
    const _updateRider = await getRiderById(id);
    const updatedRider = await _updateRider.updateAttributes(_rider);
    return updatedRider;
}

const deleteRider = async (id) => {
    const _deleteRider = await getRiderById(id);
    const deletedRider = await _deleteRider.destroy();
    return deletedRider;
}

module.exports = {
    createRider,
    deleteRider,
    getRiderById,
    getAllRiders,
    updateRider
};
