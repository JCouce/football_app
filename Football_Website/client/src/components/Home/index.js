import React, { Component } from 'react';
import { Event } from '../Event/index';
import './home.css'

export class Home extends Component {
    //TODO :: CAMBIAR EL COMPONENTE A GRID CSS DEJAR UN HEADER CON 
    // EL FREE WIDGET Y HACER UN GRID DE DOS ELEMENTOS PARA LO DEMÁS
    render() {
        return (
            <div className="homeWrapper">
                <Event />
                <Event />
            </div>
        );
    }
}

export default Home;
