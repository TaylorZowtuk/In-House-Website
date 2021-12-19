import axios from "axios";
import express, { Request, Response, Express } from 'express'
import { config } from "dotenv"

import { BASE_URL, NA_1 } from './CONSTANTS';
import { SummonerDTO } from './types/riot/SummonerDTO';

config()

const app: Express = express()
const port: number = parseInt(process.env.APP_PORT)
const key: string = process.env.RIOT_API_KEY

app.get('/summoner/:name', (req: Request, res: Response) => {
    const name: string = req.params.name;
    axios
        .get<SummonerDTO>('https://' + NA_1 + BASE_URL + `/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`)
        .then((riotRes) => {
            console.log("Get summoner:", res);

            res.send(riotRes.data)
        }).catch((err) => {
            console.log(err);
        });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})