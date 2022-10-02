import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import Grid from 'staticComponents/grid';
import { clearValidationHighlights, showDialog, enableSubmitCheck } from 'utils';
import { showValidations } from 'utils/notification';
import actionCreator from '../../../../actions/actionCreator';
import validate from 'validate.js';

class Role extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <div className="col-lg-12">

            <div className="ibox float-e-margins">

                <div className="ibox-title">
                    <h5><i className="fa fa-wpexplorer" aria-hidden="true"></i>Add Role </h5>
                    {
                        this.enableSubmit() ?
                            <span className="text-right pull-right" onClick={this.toggleAddForm.bind(this)}><span className="btn-toggle-crud-form"><i className={["fa", this.props.data.ShowAddForm ? "fa-minus" : 'fa-plus'].join(" ")} aria-hidden="true"></i></span></span> : null
                    }

                </div>

                <div className="ibox-content">

                    <div className={this.props.data.ShowRoleAddForm ? 'row show-div' : 'row hide-div'}>

                        <div className="col-lg-12">
                            {
                                this.enableSubmit() ?
                                    <Form onSubmit={this.onSubmit}>

                                        <div className="row">

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Role</label>
                                                    <Input type="text" autoFocus={true} placeholder="Enter role name" onChange={this.props.onChange} className="form-control" name="Role" value={this.props.data.Role} />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">

                                                {
                                                    this.enableSubmit() ?
                                                        <button className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i>
                                                            {this.props.data.Id > 0 ? 'Update' : 'Create'}
                                                        </button>
                                                        : null

                                                }
                                                <button className="btn btn_reset pull-right" type="reset"><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
                                            </div>
                                        </div>

                                    </Form> : null
                            }


                        </div>

                    </div>

                    {
                        this.showRecords() ?
                            <Grid showFilter={false} primaryKey="Id" columnMetadata={this.getGridColumnMetadata()} enableEdit={this.props.enableRoleUpdate} enableDelete={this.props.enableRoleDelete} resultsPerPage={10}
                                data={this.props.data.RoleList.toArray()} editAction={this.props.onEdit} deleteAction={this.props.onDelete} columns={["Role", "Id"]} /> : null
                    }
                </div>
            </div>

        </div>
    }

    resetForm() {

        this.props.dispatch(actionCreator("ROLE", "CLEAR_STATE"))
    }

    showRecords() {

        if (this.props.enableRoleRead)
            return true;
        return false;
    }

    enableSubmit() {

        return enableSubmitCheck(this.props.enableRoleCreate, this.props.enableRoleUpdate, this.props.data.Id);
    }

    getGridColumnMetadata() {

        return [{ "columnName": "Role", "displayName": "Name" }]
    }

    onSubmit(e) {

        e.preventDefault();

        if (!this.enableSubmit()) {

            return false;
        }

        let constraints = { 'Role': { presence: true } };
        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("ROLE", "SUBMIT_ITEM"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }
    }

    toggleAddForm() {

        let action = actionCreator("ROLE", "INPUT_CHANGED", { 'name': 'ShowRoleAddForm', 'value': !this.props.data.ShowRoleAddForm });
        this.props.dispatch(action);
    }

    componentDidMount() {

        this.props.dispatch(actionCreator("ROLE", "INPUT_CHANGED", { name: "init" }))
        //this.props.dispatch(inputChanged("init"));
    }
}

let mapStateToProps = function (state, ownProps) {

    return {

        'data': state.hr.settings.userManagement.roles.get("data").toObject(),
        ...ownProps.data
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        onChange: function (name, value) {

            dispatch(actionCreator("ROLE", "INPUT_CHANGED", { name, value }))
            //dispatch(inputChanged(name, value))
        },
        onEdit: function (id) {

            dispatch(actionCreator("ROLE", "EDIT_ITEM", { id }));
            //dispatch(editItem(id));
        },
        onDelete: function (id) {
            showDialog("Are you sure to remove this role ?", () => {

                dispatch(actionCreator("ROLE", "REMOVE_ITEM", { id }));
                //dispatch(deleteItem(id))
            });
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Role) 