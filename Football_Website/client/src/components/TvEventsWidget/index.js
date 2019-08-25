import React, {Component} from 'react';
import './tvEventsWidget.css';

export class TvEventsWidget extends Component {
  telecincoLogo = 'https://www.thesportsdb.com/images/media/logo/wptuww1441658169.png';

  renderTvEvents = () => {
    const eventList = this.props.events;
    let events = eventList.map ((el, i) => {
      return (
        <li className="show" key={'show' + i}>
          <img
            src={el.strLogo ? el.strLogo : this.telecincoLogo}
            alt="logo"
            className="logo"
          />
          <br />
          <span>{el.strEvent}</span>
          <br />
          <span> {el.strChannel}</span>
        </li>
      );
    });
    return events;
  };

  render () {
    return (
      <ul className="shows">
        <h1 className="title">Today best shows!</h1>
        {this.renderTvEvents ()}
      </ul>
    );
  }
}

export default TvEventsWidget;
