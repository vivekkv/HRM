import React from 'react'
import { connect } from 'react-redux';
import Navigation from './navigation';
import Header from './header';
import AuthenticationComponent from '../../../components/Base/AuthenticationComponent';
import Styles from './styles.css';

class Home extends AuthenticationComponent {

    render() {

        return (<div id="wrapper"> 

            <Navigation data={this.props.navigation} />

            <div className={["gray-bg sidebar-content", Styles.page_content_wrapper, this.props.navigation.isMiniSideBar ? Styles.mini_page_wrapper : Styles.big_page_wrapper].join(" ")}>

                <Header dispatch={this.props.dispatch} />

                <div className="wrapper wrapper-content animated fadeInRight row">
                    
                    {/*<BreadCrumb routes={this.props.routes} location={this.props.location.pathname}/>*/}
                    {this.props.children}

                </div>
            </div>
        </div>)
    }

    componentDidMount() {
        // showNotification({
        //     'message': '<span class="icon icon-settings"></span><p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
        //     'layout': 'growl'
        // });
    }
}

let mapStateToProps = function (state) {
    return {
        'navigation': state.hr.home.get("layout").toObject().navigation.toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)