import React from 'react';
import axios from "axios";

import SummonerInfo from './SummonerInfo';
import SummonerNameForm from "./SummonerNameForm";

import { BASE_URL, NA_1 } from '../CONSTANTS';
import { SummonerDTO } from '../interfaces/SummonerDTO';
import { LeagueEntryDTO } from '../interfaces/LeagueEntryDTO';

export type Summoner = {
    name: string;
    tier: string;
    rank: string;
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
        const key: string | undefined = process.env.REACT_APP_RIOT_API_KEY
        axios
            .get<SummonerDTO>('https://' + NA_1 + BASE_URL + `/lol/summoner/v4/summoners/by-name/${name}?api_key=${key}`)
            .then((res) => {
                console.log("Get summoner:", res);

                const id = res.data.id;
                const name = res.data.name;

                axios
                    .get<LeagueEntryDTO[]>('https://' + NA_1 + BASE_URL + `/lol/league/v4/entries/by-summoner/${id}?api_key=${key}`)
                    .then((res) => {
                        console.log("Get entry:", res);

                        // LeagueEntryDTO is a set whose elements are for each type of queue
                        let ranked = "RANKED_SOLO_5x5";
                        let tier = "";
                        let rank = "";
                        for (let entry of res.data) {
                            if (entry.queueType === ranked) {
                                tier = entry.tier;
                                rank = entry.rank;
                            }

                        }

                        this.setState(prevState => ({
                            summoners: [...prevState.summoners, { name: name, tier: tier, rank: rank }]
                        }))
                    }).catch((err) => {
                        console.log(err);
                    });
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