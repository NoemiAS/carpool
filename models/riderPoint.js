'use strict';
module.exports = (sequelize, DataTypes) => {

    const RiderPoint = sequelize.define('riderPoint', {
        type: { // pick up, stop or drop off point
            type: DataTypes.STRING, allowNull: false
        },
    },
        {
            classMethods: {
                associate: (models) => {
                    RiderJorney.belongsTo(models.rider);
                    RiderJorney.belongsTo(models.point);
                },
            }
        });
    return RiderPoint;
}