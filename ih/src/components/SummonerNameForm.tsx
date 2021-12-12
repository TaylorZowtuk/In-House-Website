import React from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


type SummonerNameProps = {
    sendSummonerName: (name: string) => void
};

type SummonerNameFormState = {
    summonerName: string
};

class SummonerNameForm extends React.Component<SummonerNameProps, SummonerNameFormState> {
    constructor(summonerNameProps: SummonerNameProps) {
        super(summonerNameProps);
        this.state = { summonerName: '' };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ summonerName: event.target.value });
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        this.props.sendSummonerName(this.state.summonerName);
        this.setState({ summonerName: '' });
    }

    render() {
        return (
            <form>
                <TextField id="summoner-name-field" label="Summoner Name" variant="filled" value={this.state.summonerName} onChange={this.handleChange} />

                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </form >
        );
    }
}

export default SummonerNameForm;