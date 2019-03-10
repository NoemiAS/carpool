'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rider = sequelize.define('rider', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
  }, {
      classMethods: {
        associate: (models) => {
          Rider.belongsToMany(models.point, {
            through: {
              model: models.riderPoint,
            },
          });
        },
      },
    });

  return Rider;
};