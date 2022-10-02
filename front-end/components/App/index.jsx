import React from 'react'
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
         return (<div className="gray_bg">{this.props.children}</div>)
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)