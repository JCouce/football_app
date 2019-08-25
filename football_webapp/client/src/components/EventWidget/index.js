import React from 'react';
import './event.css';

export const Event = props => {
  return (
    <div className="eventWrapper">
      <h1 className="eventTitle">{props.name}</h1>
      <img
        src={props.poster?props.poster:"https://www.thesportsdb.com/images/media/event/poster/pjjo191565436756.jpg"}
        alt="poster"
        className="poster"
      />
      <div className="results">
        <div className="equipo1">
          <img src="#" alt="" />
          <h2>{props.homeName}</h2>
          <div className="score">Score: <span className="points">{props.homeScore}</span></div>
        </div>
        <div className="equipo2">
          <img src="#" alt="" />
          <h2>{props.awayName}</h2>
          <div className="score">Score: <span className="points">{props.awayScore}</span></div>
        </div>
        <div className="description">{props.desc}</div>
      </div>
    </div>
  );
};

export default Event;
