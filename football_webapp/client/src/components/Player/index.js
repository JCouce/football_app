import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../Spinner/index';
import './player.css'

export class Player extends Component {
  componentDidMount () {
    this.props.fetchOnePlayerById (this.props.match.params.id);
  }

  render () {
    if (!this.props.player) {
      return <Spinner />;
    }
    return (
      <div className="playerWrapper">
        <div className="data personalData">
          <h1 className="name">{this.props.player.strPlayer}</h1>
          <img src={this.props.player.strCutout} alt="" className="photo" />
          <h3 className="country">{this.props.player.strNationality}</h3>
        </div>
        <div className="data football">
          <p className="playerTeam"><strong>Equipo: </strong>{this.props.player.strTeam}</p>
          <p className="number"><strong>Numero: </strong>{this.props.player.strNumber}</p>
          <p className="position"><strong>Posición:</strong>{this.props.player.strPosition}</p>
          <p className="value"><strong>Contrato: </strong>{this.props.player.strSigning}</p>
        </div>
        <div className="data origin">
          <p className="birthdate"><strong>Nacido en: </strong>{this.props.player.dateBorn}</p>
          <p className="birthplace"><strong>Lugar de nacimiento: </strong>{this.props.player.strBirthLocation}</p>
        </div>

        <p className="data desc">
            <h3>Descripción</h3>
            {this.props.player.strDescriptionEN}
        </p>
      </div>
    );
  }
}
function mapStateToProps({player}) {
  return {player};
}

export default connect (mapStateToProps, actions) (Player);
