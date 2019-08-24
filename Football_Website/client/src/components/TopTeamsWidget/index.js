import React, { Component } from 'react';
import './topTeamsWidget.css';

export class TopTeamsWidget extends Component {
    renderTopTeams = () => {
        const leagueStatsList = this.props.teams;
        let leaagueStatsFiltered = leagueStatsList.sort((a,b) => b.goalsfor-a.goalsfor).slice(0,5);
        let leagueStats = leaagueStatsFiltered.map((el,i) => {
            return (
            <li className="team" key={'topGoalsTeam' + i}>
                <span className="teamName">{el.name}</span> <span className="goalsFor">{el.goalsfor} goals!</span>
            </li>)
        })
        return leagueStats;
    }
    render() {
        return (
            <ul className="topTeamsWidget">
                <h1>Those are the top teams!</h1>
                {this.renderTopTeams()}
            </ul>
        );
    }
}

export default TopTeamsWidget;
