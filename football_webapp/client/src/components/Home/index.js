import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Event } from '../EventWidget/index';
import './home.css'
import Spinner from '../Spinner/index';
import TopTeamsWidget from '../TopTeamsWidget';
import TvEventsWidget from '../TvEventsWidget';

export class Home extends Component {
    componentDidMount() {
        //refresh every 15 mins
        this.interval = setInterval(() => this.setState({ lastRefresh: Date.now() }), 900000);
        this.props.fetchLeagueStats();
        this.props.fetchFootbal();
        this.props.fetchTvShows();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    renderWidgets = () => {
        const eventList = this.props.footbal.event;
        let events = eventList.map(el => {
            return <Event
                key={el.idEvent}
                name={el.strEvent}
                awayScore={el.intAwayScore}
                homeScore={el.intHomeScore}
                awayName={el.strAwayTeam}
                homeName={el.strHomeTeam}
                poster={el.strPoster}
                desc={el.strDescriptionEN}
            />
        });
        return events;
    }

    render() {
        if (!this.props.footbal) {
            return <Spinner/>
        }
        if (!this.props.leagueStats) {
            return <Spinner/>
        }
        if (!this.props.shows.tvevents) {
            return <Spinner/>
        }

        return (
            <div className="homeWrapper">
                <TopTeamsWidget teams={this.props.leagueStats.table}/>
                <TvEventsWidget events={this.props.shows.tvevents} />
                {this.renderWidgets()}
            </div>
        );
    }
}

function mapStateToProps({footbal, leagueStats, shows}) {
  return {footbal, leagueStats, shows};
}

export default connect (mapStateToProps, actions) (Home);

