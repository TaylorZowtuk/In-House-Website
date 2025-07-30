import { DataTypes, Sequelize } from "sequelize";

function account(sequelize: Sequelize): any {
  sequelize.define("account", {
    accountId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: /^[a-zA-Z0-9 ]+$/,
      },
    },
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    puuid: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  });
}

export default account;
