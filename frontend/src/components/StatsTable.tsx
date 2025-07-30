import { AggregatedPlayerStatDTO } from "../../../backend/src/types/AggregatedPlayerStatDTO";

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type StatsTableProps = {
  stats: AggregatedPlayerStatDTO[];
};

// TODO: create and use an aggregated stats type
class StatsTable extends React.Component<StatsTableProps, {}> {
  constructor(props: StatsTableProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Summoner Name</TableCell>
              <TableCell align="right">Kills</TableCell>
              <TableCell align="right">Assists</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.stats.map(
              (stat: AggregatedPlayerStatDTO, i: number) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {stat.name}
                  </TableCell>
                  <TableCell align="right">{stat.championsKilled}</TableCell>
                  <TableCell align="right">{stat.assists}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default StatsTable;
