import { Sequelize } from "sequelize";

function applyAssociations(sequelize: Sequelize) {
  const { user, account } = sequelize.models;

  user.hasMany(account);
  account.belongsTo(user);
}

export default applyAssociations;
