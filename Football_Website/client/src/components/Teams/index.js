import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Teams extends Component {
    componentDidMount() {
        this.props.fetchFootbal();
    }
    render() {
        console.log('HOLA BB');
        console.log(this.props);
        return (
            <div>
                Hey hey teams!
            </div>
        );
    }
}
function mapStateToProps({footbal}) {
    return { footbal }   
}

export default connect(mapStateToProps, actions)(Teams);
