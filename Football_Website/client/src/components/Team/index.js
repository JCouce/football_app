import React, {Component} from 'react';
import './team.css';
import PlayerList from '../PlayerList';
export class Team extends Component {
  constructor (props) {
    super (props);
    this.state = {
        showList:false
    };
  }
  showPlayerList = () => {
    this.setState ({showList: !this.state.showList});
  };
  render () {
    return (
      <div className="teamListWrapper">
        <div onClick={this.showPlayerList} className="team">
          <img className="logo" src={this.props.badge} alt="logo" />
          <h1>{this.props.name ? this.props.name : this.props.altName}</h1>
        </div>
        <PlayerList teamId={this.props.teamId} show={this.state.showList} />
      </div>
    );
  }
}

export default Team;
