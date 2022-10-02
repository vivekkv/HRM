import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import Auth from 'helpers/auth';
import AuthenticationComponent from '../../../../components/Base/AuthenticationComponent';
import AuthorizationComponent from '../../../../components/Base/AuthorizeComponent';
import { inputChanged } from '../../../actions/settings/userManagement/root';
import User from './user';
import Role from './role';
import AccessControl from './accessControl';
import Styles from './styles.css';

class UserManagement extends AuthenticationComponent {

    render() {

        if (this.props.data.defaultTab) {

            return (<div className={[Styles.tab_wrapper, "row"].join(" ")}>

                <Tabs defaultActiveKey={this.props.data.defaultTab} animation={false} id={"TAB-usermanagment"}>
                    <br />
                    {
                        this.props.data.userEntryAuthorized ?
                            <Tab id={"TAB-users"} eventKey={1} title={<span><i className="fa fa-user-circle"></i> users </span>}>
                                <User data={this.props.data} />
                            </Tab> : null
                    }

                    {
                        (this.props.data.enableRoleCreate || this.props.data.enableRoleRead) ?
                            <Tab id={"TAB-role"} eventKey={2} title={<span><i className="fa fa-wpexplorer"></i> Roles</span>}>
                                <Role data={this.props.data} />
                            </Tab> : null
                    }

                    {
                        this.props.data.accessControlAuthorized ?
                            <Tab id={"TAB-accessControl"} eventKey={3} title={<span><i className="fa fa-filter"></i> Access Control</span>}>
                                <AccessControl data={this.props.data} />
                            </Tab> : null
                    }
                </Tabs>

            </div>)

        } else {

            return <p>loading</p>
        }
    }

    componentDidMount() {

        this.props.dispatch(inputChanged("init"));
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.settings.userManagement.root.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        onChange: function (name, value) {
            dispatch(inputChanged(name, value))
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(UserManagement) 