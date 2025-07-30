import React from "react";

import { AggregatedPlayerStatDTO } from "../../../../backend/src/types/AggregatedPlayerStatDTO";
import PageHeader from "../../components/PageHeader";
import StatsTable from "../../components/StatsTable";
import { getAggregatedStats } from "./stats";

type PlayerStatsState = {
  aggregatedStats: AggregatedPlayerStatDTO[];
};

class Leaderboards extends React.Component<{}, PlayerStatsState> {
  constructor(props = {}) {
    super(props);
    this.state = { aggregatedStats: [] };
  }

  componentDidMount() {
    getAggregatedStats().then((loadedStats) =>
      this.setState({ aggregatedStats: loadedStats })
    );
  }

  render() {
    return (
      <div>
        <PageHeader header="Leaderboards"></PageHeader>
        {this.state.aggregatedStats.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <StatsTable stats={this.state.aggregatedStats}></StatsTable>
        )}
      </div>
    );
  }
}

export default Leaderboards;
