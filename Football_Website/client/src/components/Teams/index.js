import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../Spinner/index';
import './teams.css'
import Team from '../Team';

export class Teams extends Component {
    constructor (props) {
        super (props);
        this.state = {
            shown:false
        };
      }
    componentDidMount() {
        this.props.fetchSpanishTeams();
    }

    componentDidUpdate() {
        //carga inicial de jugadores cuando clickamos en un equipo
        if (this.state.shown && !this.props.players) {
            this.props.fetchPlayersById(this.state.shown);
        }
        //comprobación para comprobar que el equipo seleccionado coincide con los jugadores
        if (this.props.players && this.props.players.player[0].idTeam !== this.state.shown && this.state.shown) {
            this.props.fetchPlayersById(this.state.shown);
        }
    }

    showPlayerList = (id) => {
        if (id === this.state.shown) {
            this.setState ({shown: false});
        } else {
            this.setState ({shown: id});
        }
    };
    
    
    renderTeams = () =>{
        const teamList = this.props.spanishTeams.teams;
        let teams = teamList.map((el,i) => {
            return (
                <Team 
                    key={el.idTeam} 
                    name={el.strAlternate} 
                    altName={el.strTeam} 
                    badge={el.strTeamBadge} 
                    teamId={el.idTeam} 
                    click={this.showPlayerList}
                    shown={this.state.shown}
                    players={this.props.players}
                    />
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
function mapStateToProps({spanishTeams, players}) {
    return { spanishTeams, players }   
}

export default connect(mapStateToProps, actions)(Teams);
