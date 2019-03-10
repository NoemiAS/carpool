'use strict';
module.exports = (sequelize, DataTypes) => {
    const Point = sequelize.define('point', {
        jorneyCode: { type: DataTypes.STRING, allowNull: false },
        estimatedDateTime: { type: DataTypes.DATE, allowNull: false },
        latitudeAddress: { type: DataTypes.FLOAT, allowNull: false },
        longitudeAddress: { type: DataTypes.FLOAT, allowNull: false },
        maxPax: { type: DataTypes.INTEGER, allowNull: false },
        full: { type: DataTypes.BOOLEAN, allowNull: false },
        type: { // departure, stop, arrival
            type: DataTypes.STRING, allowNull: false
        },
    }, {
            classMethods: {
                associate: (models) => {
                    Point.belongsTo(models.driver);
                    Point.belongsToMany(models.rider, {
                        through: {
                            model: models.riderPoint,
                        },
                    });
                },
            },
        });

    return Point;
};