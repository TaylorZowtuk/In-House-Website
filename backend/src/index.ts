import axios from "axios";
import express, { Request, Response, Express } from "express";
import { config } from "dotenv";

import { BASE_URL, NA_1 } from "./CONSTANTS";
import { SummonerDTO } from "./types/riot/SummonerDTO";
import { LeagueEntryDTO } from "./types/riot/LeagueEntryDTO";
import sequelize from "../sequelize";

config();

const app: Express = express();
const port: number = parseInt(process.env.APP_PORT);
const key: string = process.env.RIOT_API_KEY;

app.get("/summoner/:name", (req: Request, res: Response) => {
  const name: string = req.params.name;
  axios
    .get<SummonerDTO>(
      "https://" +
        NA_1 +
        BASE_URL +
        `/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`
    )
    .then((riotRes) => {
      console.log("Get summoner:", res);

      res.status(201).send(riotRes.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/entries/:encryptedSummonerId", (req: Request, res: Response) => {
  const encryptedSummonerId: string = req.params.encryptedSummonerId;
  axios
    .get<LeagueEntryDTO[]>(
      "https://" +
        NA_1 +
        BASE_URL +
        `/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${key}`
    )
    .then((riotRes) => {
      console.log("Get entries:", res);

      res.status(201).send(riotRes.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post("/:match", (req: Request, res: Response) => {
  res.status(501).send("Not implemented");

  // const match: any = req.params.match;
  // console.log("Creating match from:", match);

  // sequelize.models.match
  //   .create(
  //     {
  //       matchId: match.matchId,
  //       gameDuration: match.gameDuration,
  //       gameVersion: match.gameVersion,
  //       gameDatetime: match.gameCreation,
  //       playerStats: match.participants,
  //     },
  //     { include: [sequelize.models.playerStat] }
  //   )
  //   .then((newMatch) => {
  //     res.status(201).send(newMatch);
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //   });
});

app.post("/player/:stats", (req: Request, res: Response) => {
  res.status(501).send("Not implemented");

  // Untested
  const stat: any = req.params.stat;
  console.log("Creating playerStat from:", stat);

  sequelize.models.playerStat
    .create(stat)
    .then((newPlayerStat) => {
      res.status(201).send(JSON.stringify(newPlayerStat));
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/player/:stats", (req: Request, res: Response) => {
  console.log("Returning all playerStats");

  sequelize.models.playerStat
    .findAll({ raw: true })
    .then((stats) => {
      res.status(200).json(stats);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/player/:aggregatedStats", (req: Request, res: Response) => {
  console.log("Returning all aggregatedPlayerStats");

  // TODO: Add more fields
  sequelize.models.playerStat
    .findAll({
      attributes: [
        "name",
        [sequelize.fn("sum", sequelize.col("assists")), "assists"],
      ],
      group: "name",
      raw: true,
    })
    .then((aggregatedStats) => {
      res.status(200).json(aggregatedStats);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
