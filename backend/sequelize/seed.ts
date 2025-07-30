import * as fs from "fs";
import * as path from "path";

import axios, { AxiosResponse } from "axios";

import sequelize from "./index";
import { ParticipantDTO } from "../src/types/ParticipantDTO";
import { PlayerStatDTO } from "../src/types/PlayerStatDTO";
import { participantToPlayer } from "../../frontend/src/interfaces/mappings";
import { REPLAY_BASE_URL } from "../src/CONSTANTS";
import { aggregateStatsQuery } from "./aggregates";

async function seed() {
  const args: string[] = process.argv.slice(2);
  if (args.length !== 1) {
    console.log("Expected 1 argument: seed.ts path_to_replays_dir");
    return;
  }
  const path_to_replays_dir: string = args[0];

  console.log(
    "Will rewrite the SQLite example database, adding some dummy data."
  );

  await sequelize.sync({ force: true });

  const taz: any = await sequelize.models.user.create({
    username: "taz",
  });
  const znap: any = await sequelize.models.user.create({ username: "znap" });

  // await taz.createAccount({
  //   accountId: "L6KyH_4QhNoPw8vwp9GSqgMIx-FMA7oqEfHERtJow3OBVQ",
  //   name: "Top Channel10 M4",
  //   id: "iil0P5DgUX6zAS9OMolOJRbCb9-mlrQh9sHey8dJlVSVAeQ",
  //   puuid:
  //     "oXeo1UyNUoZ8i3zX1Zo68QvxNz4puNzCKoQgF-M-1aWlqf30xocMpvusT-CKmuIalDnC3ADslhMV1A",
  // });
  // await znap.createAccount({
  //   accountId: "txn2qqbhLjucp53EAG27xHKwMW53jY0_CWG3Ce0Zd9ZNQw",
  //   name: "King Nap",
  //   id: "ZaHdFS80zjOmJl3mKs0gzaA9JlfnflqV-aKH9Xkx4t8OJ4M",
  //   puuid:
  //     "rJTC2oeUZmYJ_vfiTYFcsif4NlTUy_RcslSlamIhgMlJKSQN8RQXBCFdkpTr9OOOxjO678v4ItT3tw",
  // });

  await seedReplays(path_to_replays_dir);

  console.log("Seeding done!");
  const users = await sequelize.models.user.findAll({ raw: true });
  console.log("Users:", users);

  // sequelize.models.account.findAll().then((accounts) => {
  //   console.log("Accounts:", accounts);
  // });

  const stats = await sequelize.models.playerStat.findAll({ raw: true });
  console.log("Stats:", stats);

  const wins = await aggregateStatsQuery(true);
  console.log("Aggregate wins:", wins);

  const losses = await aggregateStatsQuery(false);
  console.log("Aggregate losses:", losses);

  // TODO: join the wins and losses together in order to return AggregatedPlayerStatDTO
}

async function seedReplays(path_to_replays_dir: string): Promise<void> {
  console.log("Seeding with replays from:", path_to_replays_dir);

  // Get all filepaths from path_to_replays_dir
  const filepaths: string[] = [];
  fs.readdirSync(path_to_replays_dir).forEach((file) => {
    const filepath = path.join(path_to_replays_dir, file);
    filepaths.push(filepath);
  });

  // Make a request to replayParser with each filepath
  for (const filepath of filepaths) {
    let res: AxiosResponse<any, any>;
    // TODO: figure out how to set the default base_url on a per-file basis
    // TODO: why can I not pass a data object to axios.post; why does it need to be a query param?
    res = await axios.post<any>(
      REPLAY_BASE_URL + `/parseReplay?filepath=${filepath}`
    );
    console.log("res:", res.data);

    // Create a playerStat for each player in the match
    const participants: ParticipantDTO[] = res.data.metadata.playerStatistics;
    const playerStats: PlayerStatDTO[] = [];
    participants.forEach((participant) => {
      const playerStat: PlayerStatDTO = participantToPlayer(participant);
      playerStats.push(playerStat);
    });

    for (const playerStat of playerStats) {
      await sequelize.models.playerStat.create(playerStat);
    }
  }
}

// Run using: `npm run seed -- <path_to_replays_dir>`
seed();
