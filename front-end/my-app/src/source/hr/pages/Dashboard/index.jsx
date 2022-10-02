import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    render() {
        return (<h2>Dashboard</h2>)
    }
}

let mapStateToProps = function (state) {
    return {

    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    } 
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Dashboard)