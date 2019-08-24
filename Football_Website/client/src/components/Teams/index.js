import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../Spinner/index';
import './teams.css';
import Team from '../Team';

export class Teams extends Component {
  constructor (props) {
    super (props);
    this.state = {
      shown: false,
    };
  }
  componentDidMount () {
    this.props.fetchSpanishTeams ();
  }

  componentDidUpdate () {
    //carga inicial de jugadores cuando clickamos en un equipo
    if (this.state.shown && !this.props.players) {
      this.props.fetchPlayersById (this.state.shown);
    }
    //comprobación para comprobar que el equipo seleccionado coincide con los jugadores
    if (
      this.props.players &&
      this.props.players.player[0].idTeam !== this.state.shown &&
      this.state.shown
    ) {
      this.props.fetchPlayersById (this.state.shown);
    }
  }

  showPlayerListHandler = id => {
    if (id === this.state.shown) {
      this.setState ({shown: false});
    } else {
      this.setState ({shown: id});
    }
  };

  sortTeamsByFundationYearHandler = () => {
    if (this.state.sort !== 'year-asc') {
      this.setState ({sort: 'year-asc'});
    } else {
      this.setState ({sort: 'year-desc'});
    }
  };

  sortTeamsByNameHandler = () => {
    if (this.state.sort !== 'name-asc') {
      this.setState ({sort: 'name-asc'});
    } else {
      this.setState ({sort: 'name-desc'});
    }
  };

  teamSorting = teamList => {
    if (this.state.sort === 'year-asc') {
      teamList = teamList.sort ((a, b) => b.intFormedYear - a.intFormedYear);
    }
    if (this.state.sort === 'year-desc') {
      teamList = teamList.sort ((a, b) => a.intFormedYear - b.intFormedYear);
    }
    if (this.state.sort === 'name-asc') {
      teamList = teamList.sort ((a, b) => {
        if (a.strTeam < b.strTeam) {
          return -1;
        }
        if (a.strTeam > b.strTeam) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.sort === 'name-desc') {
      teamList = teamList.sort ((a, b) => {
        if (b.strTeam < a.strTeam) {
          return -1;
        }
        if (b.strTeam > a.strTeam) {
          return 1;
        }
        return 0;
      });
    }
    return teamList;
  };

  renderTeams = () => {
    let teamList = this.props.spanishTeams.teams;
    teamList = this.teamSorting (teamList);
    console.log(teamList)
    let teams = teamList.map ((el, i) => {
      return (
        <Team
          key={el.idTeam}
          name={el.strTeam}
          badge={el.strTeamBadge}
          teamId={el.idTeam}
          teamDesc={el.strDescriptionES}
          click={this.showPlayerListHandler}
          shown={this.state.shown}
          players={this.props.players}
        />
      );
    });
    return teams;
  };

  render () {
    if (!this.props.spanishTeams) {
      return <Spinner />;
    }
    return (
      <div className="mainTeamsWrapper">
        <div className="sorting">
          <span onClick={this.sortTeamsByNameHandler}>Sort by name</span>
          {' '}
          <span onClick={this.sortTeamsByFundationYearHandler}>
            Sort by creation date
          </span>
        </div>
        {this.renderTeams ()}
      </div>
    );
  }
}

function mapStateToProps({spanishTeams, players}) {
  return {spanishTeams, players};
}

export default connect (mapStateToProps, actions) (Teams);
