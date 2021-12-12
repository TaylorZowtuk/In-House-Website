
import React from 'react';

import { Summoner } from "./Dashboard"

type SummonerInfoProps = {
    summoners: Array<Summoner>
};

class SummonerInfo extends React.Component<SummonerInfoProps, {}> {
    constructor(summoners: SummonerInfoProps) {
        super(summoners);
    }

    render() {
        return (
            this.props.summoners.map((summoner: Summoner, i: number) => <p key={i}>Summoner Name: {summoner.name} Level: {summoner.summonerLevel}</p>)
        );
    }
}

export default SummonerInfo