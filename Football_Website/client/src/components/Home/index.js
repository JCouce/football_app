import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Event } from '../Event/index';
import './home.css'
import Spinner from '../Spinner/index';

export class Home extends Component {
    //TODO :: CAMBIAR EL COMPONENTE A GRID CSS DEJAR UN HEADER CON 
    // EL FREE WIDGET Y HACER UN GRID DE DOS ELEMENTOS PARA LO DEMÁS
    componentDidMount() {
        this.props.fetchFootbal();
    }
    renderWidgets = () => {
        const eventList = this.props.footbal.event;
        console.log(eventList);
        let events = eventList.map(element => {
            return <Event
                key={element.idEvent}
                name={element.strEvent}
                awayScore={element.intAwayScore}
                homeScore={element.intHomeScore}
                awayName={element.strAwayTeam}
                homeName={element.strHomeTeam}
                poster={element.strPoster}
                desc={element.strDescriptionEN}
            />
        });
        return events;
    }
    render() {
        if (!this.props.footbal) {
            return <Spinner/>
        }

        return (
            <div className="homeWrapper">
                {this.renderWidgets()}
            </div>
        );
    }
}

function mapStateToProps({footbal}) {
  return {footbal};
}

export default connect (mapStateToProps, actions) (Home);

