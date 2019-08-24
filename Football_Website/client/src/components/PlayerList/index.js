import React, { Component } from 'react';

export class PlayerList extends Component {
    componentDidMount() {
        //console.log('hola')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('hola')
    }
    render() {
        return (
            <div style={{display:this.props.show?'block':'none'}}>
                Im the playerlist
            </div>
        );
    }
}

export default PlayerList;
