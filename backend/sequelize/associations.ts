import { Sequelize } from "sequelize";

function applyAssociations(sequelize: Sequelize) {
  const { user, account, match, playerStat } = sequelize.models;

  user.hasMany(account, {
    foreignKey: {
      allowNull: false,
    },
  });
  account.belongsTo(user);

  match.hasMany(playerStat, {
    foreignKey: {
      allowNull: false,
    },
  });
  playerStat.belongsTo(match);

  user.hasMany(playerStat, {
    foreignKey: {
      name: "username",
      allowNull: false,
    },
  });
  playerStat.belongsTo(user);
}

export default applyAssociations;
