const riderHelper = require('../helpers/db/rider.helper');
const responseHelper = require('../helpers/response/response.helper');

const createRider = (req, res) => {
    riderHelper.add(req.body)
        .then(rider => responseHelper.send(null, rider, res))
        .catch(err => responseHelper.send(err, null, res));
};

const updateRider = (req, res) => {
    riderHelper.updaterider(req.params.id, req.body)
        .then(rider => responseHelper.send(null, rider.rider, res))
        .catch(err => responseHelper.send(err, null, res));
};

const getRiderById = (req, res) => {
    riderHelper.getRiderById(req.params.id)
        .then(rider => responseHelper.send(null, rider, res))
        .catch(err => responseHelper.send(err, null, res));
};

const getAllRiders = (req, res) => {
    const offset = req.params.offset || 0;
    const limit = req.params.limit || 10;
    riderHelper.getAllRiders(limit, req.body)
        .then(riders => responseHelper.send(null, riders, res))
        .catch(err => responseHelper.send(err, null, res));
};

const deleteRider = (req, res) => {
    riderHelper.deleterider(req.params.id)
        .then(rider => responseHelper.send(null, rider, res))
        .catch(err => responseHelper.send(err, null, res));
};

module.exports = {
    createRider,
    updateRider,
    getRiderById,
    getAllRiders,
    deleteRider
};
