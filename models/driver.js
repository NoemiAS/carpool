'use strict';
module.exports = (sequelize, DataTypes) => {
    const Driver = sequelize.define('driver', {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        phoneNumber: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        carPlate: { type: DataTypes.STRING, allowNull: false },
        maxPax: { type: DataTypes.INTEGER, allowNull: false },
    }, {
            classMethods: {
                associate: (models) => {
                    Driver.hasMany(models.point);
                },
            },
        });

    return Driver;
};