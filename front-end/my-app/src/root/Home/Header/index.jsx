import React from 'react';
import Styles from './styles.css';
import { toggleSideBarMenu } from '../../../actions/home';

export default class Header extends React.Component {

    render() {
        return (<div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" role="navigation" >
                <div className="navbar-header">
                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={this.toggleSideBarMenu.bind(this)}><i className="fa fa-bars"></i> </a>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle count-info" data-toggle="dropdown">
                            <i className="fa fa-envelope"></i>  <span className={["label", Styles.msg_background].join(" ")}>0</span>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle count-info" data-toggle="dropdown">
                            <i className="fa fa-bell"></i>  <span className="label label-primary">0</span>
                        </a>
                    </li>
                    <li>
                        <a><i className="fa fa-sign-out"></i> Log out </a>
                    </li>
                </ul>
            </nav>
        </div>)
    }

    toggleSideBarMenu() {
        this.props.dispatch(toggleSideBarMenu())
    }
}