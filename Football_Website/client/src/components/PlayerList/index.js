import React, { Component } from 'react';
import Spinner from '../Spinner/index';
import { Link } from 'react-router-dom';
import './playerList.css'

export class PlayerList extends Component {

    renderPlayers = () => {
        if (!this.props.players) {
            return <Spinner />
        }
        const playerList = this.props.players.player;
        let players = playerList.map((el,i) => {
            return (
                <Link className="player" to={'/player/' + el.idPlayer} key={el.idPlayer}>
                    <h3 className="name">{el.strPlayer}</h3>
                    <img className="image" src={el.strThumb} alt="player"/>
                    <span>{el.strPosition}</span>
                </Link>
            )
        })
        return players;
    }

    render() {
        return (
            <div className="playerList" style={{display:this.props.shown === this.props.teamId?'grid':'none'}}>
                <div className="teamDesc">{this.props.teamDesc}</div>
                {this.renderPlayers()}
            </div>
        );  
    }
}

export default PlayerList;
