import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../Spinner/index';
import './teams.css'

export class Teams extends Component {
    componentDidMount() {
        this.props.fetchSpanishTeams();
    }
    renderTeams = () =>{
        const teamList = this.props.spanishTeams.teams;
        let teams = teamList.map((el,i) => {
            return (
                <div key={el.idTeam} className="team">
                    <img className="logo" src={el.strTeamBadge} alt="logo" />
                    <h1>{el.strAlternate}</h1>
                </div>
            )
        })
        return teams;
    }
    render() {
        if (!this.props.spanishTeams) {
            return <Spinner/>
        }
        return (
            <div className="teamsWrapper">
                {this.renderTeams()}
            </div>
        );
    }
}
function mapStateToProps({spanishTeams}) {
    return { spanishTeams }   
}

export default connect(mapStateToProps, actions)(Teams);
