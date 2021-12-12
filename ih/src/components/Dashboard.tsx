import React from 'react';
import axios from "axios";

import SummonerInfo from './SummonerInfo';
import SummonerNameForm from "./SummonerNameForm";

import { BASE_URL, NA_1 } from '../CONSTANTS';
import { SummonerDTO } from '../interfaces/SummonerDTO';

export type Summoner = {
    name: string;
    summonerLevel: bigint;
};

type DashboardState = {
    summoners: Summoner[];
};

type DashboardProps = {};

class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps = {}) {
        super(props);
        this.state = { summoners: [] };
    }

    addSummonerName = (name: string) => {
        const mapResToSummoner = (res: SummonerDTO): Summoner => { return { name: res.name, summonerLevel: res.summonerLevel } }

        const key: string | undefined = process.env.REACT_APP_RIOT_API_KEY
        axios
            .get<SummonerDTO>('https://' + NA_1 + BASE_URL + `/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`)
            .then((res) => {
                console.log("Post summoner details:", res);
                this.setState(prevState => ({
                    summoners: [...prevState.summoners, mapResToSummoner(res.data)]
                }))
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <SummonerNameForm sendSummonerName={this.addSummonerName} />
                <SummonerInfo summoners={this.state.summoners} />
            </div>
        );
    }
}

export default Dashboard