import React from 'react';
import './team.css';
import PlayerList from '../PlayerList';

export const Team = (props) => {
    return(
        <div className="teamListWrapper">
        <div onClick={() =>props.click(props.teamId)} className="team">
          <img className="logo" src={props.badge} alt="logo" />
          <h1>{props.name}</h1>
        </div>
        <PlayerList teamId={props.teamId} shown={props.shown} players={props.players}/>
      </div>
    )
}

export default Team