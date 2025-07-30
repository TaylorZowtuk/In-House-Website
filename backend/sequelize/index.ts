import { Sequelize } from "sequelize";
import user from "./models/user.model";
import account from "./models/account.model";
import match from "./models/match.model";
import playerStat from "./models/playerStat.model";
import applyAssociations from "./associations";

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize: Sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "memory",
  logQueryParameters: true,
  benchmark: true,
});

const modelDefiners = [user, account, match, playerStat];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyAssociations(sequelize);

// We export the sequelize connection instance to be used around our app.
export default sequelize;
