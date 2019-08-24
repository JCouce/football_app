import React, { Component } from 'react';
import Spinner from '../Spinner/index';

export class PlayerList extends Component {

    renderPlayers = () => {
        if (!this.props.players) {
            return <Spinner />
        }
        const playerList = this.props.players.player;
        let players = playerList.map((el,i) => {
            return (
                <div key={el.idPlayer}>{el.strPlayer}</div>
            )
        })
        return players;
    }

    render() {
        return (
            <div style={{display:this.props.shown === this.props.teamId?'block':'none'}}>
                {this.renderPlayers()}
            </div>
        );  
    }
}

export default PlayerList;
