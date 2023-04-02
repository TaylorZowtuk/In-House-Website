import React from 'react';
import axios from "axios";

import SummonerInfo from './SummonerInfo';
import SummonerNameForm from "./SummonerNameForm";
import CoinFlip from './CoinFlipper';

import { SummonerDTO } from '../../../backend/src/types/riot/SummonerDTO';
import { LeagueEntryDTO } from '../../../backend/src/types/riot/LeagueEntryDTO';

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

    summonerFromEntries = (entries: LeagueEntryDTO[], name: string): Summoner => {
        // LeagueEntryDTO is a set whose elements are for each type of queue
        const ranked: string = "RANKED_SOLO_5x5";
        const unranked: string = "UNRANKED"
        let tier: string = "";
        let rank: string = "";

        for (let entry of entries) {
            if (entry.queueType === ranked) {
                tier = entry.tier;
                rank = entry.rank;
            }
        }

        if (tier === "") {
            tier = unranked
            rank = unranked
        }

        return { name: name, tier: tier, rank: rank }
    }

    addSummonerName = (name: string) => {
        axios
            .get<SummonerDTO>(`/summoner/${name}`)
            .then((res) => {
                console.log("Get summoner:", res);

                const encryptedSummonerId: string = res.data.id;
                const name: string = res.data.name;

                axios
                    .get<LeagueEntryDTO[]>(`/entries/${encryptedSummonerId}`)
                    .then((res) => {
                        console.log("Get entries:", res);

                        const summoner: Summoner = this.summonerFromEntries(res.data, name);

                        this.setState(prevState => ({
                            summoners: [...prevState.summoners, summoner]
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
                <CoinFlip coinSides={["Eagle", "Heads"]} />
            </div>
        );
    }
}

export default Dashboard