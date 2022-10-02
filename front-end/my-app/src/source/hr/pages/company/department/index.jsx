import React from 'react';
import { connect } from 'react-redux';
import AuthenticationComponent from '../../../../components/Base/AuthenticationComponent';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Dropdown from 'staticComponents/dropdown';
import FormGroup from 'staticComponents/formGroup';
import TextArea from 'staticComponents/textarea';
import Grid from 'staticComponents/grid';
import actionCreator from '../../../actions/actionCreator';
import { clearValidationHighlights, showDialog, enableSubmitCheck } from 'utils';
import { showValidations } from 'utils/notification';
import validate from 'validate.js';

class Department extends AuthenticationComponent {

    render() {

        return (<div >

            <div className="ibox float-e-margins">

                <div className="ibox-title">

                    <h5><i className="fa fa-building-o" aria-hidden="true"></i>Department </h5>
                    {
                        this.enableSubmit() ?
                            <span className="text-right pull-right" onClick={this.toggleAddForm.bind(this)}><span className="btn-toggle-crud-form">
                                <i className={["fa", this.props.data.ShowAddForm ? "fa-minus" : 'fa-plus'].join(" ")} aria-hidden="true"></i></span></span> : null
                    }

                </div>

                <div className="ibox-content">

                    <div className={this.props.data.ShowAddForm ? 'row show-div' : 'row hide-div'}>

                        <div className="col-lg-12">
                            {
                                this.enableSubmit() ?
                                    <Form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">


                                            <div className="row">

                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                    <FormGroup label="Name" required={true}>
                                                        <Input type="text" placeholder="Enter department name" className="form-control" name="DepartmentName" value={this.props.data.DepartmentName} onChange={this.props.onChange} />
                                                    </FormGroup>
                                                </div>

                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                    <FormGroup label="Branch" required={true}>
                                                        <Dropdown multi={false} name="BranchId" updateAlways={true} dataSource={this.props.data.BranchList.toArray()} value={this.props.data.BranchId} onChange={this.props.onChange} placeholder="Select branch" />
                                                    </FormGroup>
                                                </div>

                                                {/*<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                    <FormGroup label="Department Head" required={true}>
                                                        <Dropdown multi={false} name="DepartmentHead" updateAlways={true} dataSource={this.props.data.DepartmentHeadList.toArray()} value={this.props.data.DepartmentHead} onChange={this.props.onChange} placeholder="Select department head" />
                                                    </FormGroup>
                                                </div>

                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                    <FormGroup label="Parent Department" required={true}>
                                                        <Dropdown multi={false} name="ParentDepartmentId" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.ParentDepartmentId} onChange={this.props.onChange} placeholder="Select parent department" />
                                                    </FormGroup>
                                                </div>*/}

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
                                                <button className="btn btn_reset pull-right" type="button" onClick={this.resetForm.bind(this)}><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
                                            </div>
                                        </div>

                                    </Form> : null

                            }

                        </div>

                    </div>

                    {
                        this.showRecords() ?
                            <Grid showFilter={false} primaryKey="Id" enableEdit={this.props.data.enableUpdate} enableDelete={this.props.data.enableDelete} resultsPerPage={10} data={this.props.data.DepartmentList.toArray()}
                                editAction={this.props.onEdit} deleteAction={this.props.onDelete} columns={["DepartmentName", "BranchName", "Id"]} /> : null
                    }

                </div>
            </div>
        </div>)
    }

    showRecords() {

        if (this.props.data.enableRead)
            return true;
        return false;
    }

    resetForm() {

        this.props.dispatch(actionCreator("DEPARTMENT", "CLEAR_STATE"))
    }

    enableSubmit() {

        return enableSubmitCheck(this.props.data.enableCreate, this.props.data.enableUpdate, this.props.data.Id);
    }

    onSubmit(e) {

        if (!this.enableSubmit()) {

            return false;
        }

        e.preventDefault();

        let constraints = {
            'DepartmentName': { 'presence': true },
            'BranchId': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("DEPARTMENT", "SUBMIT_ITEM"));

        } else {
            showValidations("Fix the following errors to continue !", validations);
        }
    }

    toggleAddForm() {

        let action = actionCreator("DEPARTMENT", "INPUT_CHANGED", { 'name': 'ShowAddForm', 'value': !this.props.data.ShowAddForm });
        this.props.dispatch(action);
    }

    componentDidMount() {

        this.props.dispatch(actionCreator("DEPARTMENT", "INPUT_CHANGED", { name: "init" }))
    }
}

let mapStateToProps = function (state) {

    return {
        'data': state.hr.company.department.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {

    return {
        dispatch,
        onChange: function (name, value) {

            dispatch(actionCreator("DEPARTMENT", "INPUT_CHANGED", { name, value }))
        },
        onEdit: function (id) {

            dispatch(actionCreator("DEPARTMENT", "EDIT_ITEM", { id }));
        },
        onDelete: function (id) {

            showDialog("Are you sure to remove this department ?", () => {

                dispatch(actionCreator("DEPARTMENT", "REMOVE_ITEM", { id }));
            });
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Department) 