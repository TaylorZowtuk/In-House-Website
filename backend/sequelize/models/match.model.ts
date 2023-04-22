import { DataTypes, Sequelize } from "sequelize";

function match(sequelize: Sequelize): any {
  sequelize.define("match", {
    matchId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    gameDuration: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    gameVersion: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    gameDatetime: {
      allowNull: false,
      type: DataTypes.DATE,
      unique: true,
    },
  });
}

export default match;
