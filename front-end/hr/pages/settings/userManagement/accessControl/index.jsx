import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Button from 'staticComponents/button';
import { getallAccessControlList, inputChanged, updateAccessControl } from '../../../../actions/settings/userManagement/accessControl';
import { showWarningMessage } from 'utils/notification.js';
import Treeview from './treeView';

export default class AccessControl extends React.Component {

    render() {
        return <div className="col-lg-12">

            <div className="ibox float-e-margins">

                <div className="ibox-title">
                    <h5><i className="fa fa-filter" aria-hidden="true"></i>Authorize User </h5>
                </div>

                <div className="ibox-content">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-lg-3">

                                    <div className="form-group">
                                        <label>Role</label>
                                        <Dropdown multi={false} name="AuthorizeRoleId" updateAlways={true} dataSource={this.props.data.RoleList.toArray()} value={this.props.data.AuthorizeRoleId} onChange={this.props.onChange} placeholder="Select user role" />
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <br />
                                    <Button onClick={this.onAccessControlChangeSubmit.bind(this)} type="button" action="submit"> Submit
                                        <i className="fa fa-bandcamp" aria-hidden="true"></i>
                                    </Button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <Treeview data={this.props.data} dispatch={this.props.dispatch} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    onAccessControlChangeSubmit() {

        if(this.props.data.AccessControlChangeList.toArray().length == 0) {

            showWarningMessage("There are no changes made to update");
        } else {

            this.props.dispatch(updateAccessControl());
        }
    }

    componentDidMount() {

        this.props.dispatch(getallAccessControlList());
        this.props.dispatch(inputChanged("init"));
    }

}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.settings.userManagement.accessControl.get("data").toObject()
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(AccessControl) 