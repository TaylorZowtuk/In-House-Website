import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Summoner } from "./Dashboard"
import { tierMappings } from "../interfaces/mappings"


type SummonerInfoProps = {
    summoners: Array<Summoner>
};

class SummonerInfo extends React.Component<SummonerInfoProps, {}> {
    render() {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Summoner Name</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Tier</TableCell>
                            <TableCell align="right">Rank</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.summoners.map((summoner: Summoner, i: number) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {summoner.name}
                                </TableCell>
                                <TableCell align="right"><img
                                    src={tierMappings(summoner.tier)}
                                    width={60}
                                    alt='Emblem'
                                /></TableCell>
                                <TableCell align="right">{summoner.tier}</TableCell>
                                <TableCell align="right">{summoner.rank}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default SummonerInfo