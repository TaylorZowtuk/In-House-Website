import { Sequelize } from "sequelize";

function applyAssociations(sequelize: Sequelize) {
  // TODO: add this back when we care about people having accounts; for now it will
  // just make thing harder to test
  const { user, account, match, playerStat } = sequelize.models;

  // user.hasMany(account, {
  //   foreignKey: {
  //     allowNull: false,
  //   },
  // });
  // account.belongsTo(user);

  // match.hasMany(playerStat, {
  //   foreignKey: {
  //     allowNull: false,
  //   },
  // });
  // playerStat.belongsTo(match);

  // user.hasMany(playerStat, {
  //   foreignKey: {
  //     name: "username",
  //     allowNull: true,
  //   },
  // });
  // playerStat.belongsTo(user, { foreignKey: "name" });
}

export default applyAssociations;
