import React from 'react';
import './event.css';

export const Event = props => {
  return (
    <div className="eventWrapper">
      <h1 className="eventTitle">Nombre del partido</h1>
      <img
        src="https://www.thesportsdb.com/images/media/event/poster/pjjo191565436756.jpg"
        alt="poster"
        className="poster"
      />
      <div className="results">
        <div className="equipo1">
          <img src="#" alt="" />
          <h2>Equipo1</h2>
          <div className="score">Score: <span className="points">0</span></div>
        </div>
        <div className="equipo2">
          <img src="#" alt="" />
          <h2>Equipo2</h2>
          <div className="score">Score: <span className="points">0</span></div>
        </div>
        <div className="description">importance raw one library rice printed recent everywhere town total sets increase satisfied use party nine learn heading was enjoy children you sheep friendly</div>
      </div>
    </div>
  );
};

export default Event;
