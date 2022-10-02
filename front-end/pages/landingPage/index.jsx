import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import HrLogin from 'hr/pages/auth/login';
import { toggleHrLoginForm } from '../../actions/landingPage';
import Styles from './styles.css';

class LandingPage extends React.Component {

    constructor() {
        super();
        this.toggleLogin = this.toggleLogin.bind(this); 
    }

    render() {

        return (<div>
            <div className="navbar navbar-fixed-top">
                
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className={Styles.nav_brand}><i className="fa fa-bolt"></i></a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active" onClick={this.toggleLogin}><button className={Styles.btn_login}>SIGN IN</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal className="modal_popup_full_screen model_popup_transparent" onHide={this.toggleLogin} show={this.props.data.showLogin} container={this} aria-labelledby="contained-modal-title">
                <Modal.Header closeButton>
                    <Modal.Title >Welcome to ERP &nbsp; <i className="fa fa-bolt" aria-hidden="true"></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HrLogin />
                </Modal.Body>
            </Modal>


            <div id="hello">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <h1>ERP</h1>
                            <h2>ONLINE ERP APPLICATION</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div id="green">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 centered">
                        </div>

                        <div className="col-lg-7 centered">
                            <h3>WHAT WE CAN DO?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>

            <section id="contact"></section>
            <div id="social">
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <div className="col-md-3">
                                <a><i className="fa fa-facebook"></i></a>
                            </div>
                            <div className="col-md-3">
                                <a><i className="fa fa-dribbble"></i></a>
                            </div>
                            <div className="col-md-3">
                                <a><i className="fa fa-twitter"></i></a>
                            </div>
                            <div className="col-md-3">
                                <a><i className="fa fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="f">
                <div className="container">
                    <div className="row">
                        {/*<p>Crafted with <i className="fa fa-heart"></i> by BlackTie.co.</p>*/}
                    </div>
                </div>
            </div>
        </div>
        )
    }

    toggleLogin() {
        this.props.dispatch(toggleHrLoginForm(!this.props.data.showLogin))
    }
}


let mapStateToProps = function (state) {
    return {
        'data': state.landingPage.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

LandingPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(LandingPage)