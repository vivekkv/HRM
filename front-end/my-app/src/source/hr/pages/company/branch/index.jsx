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


class Branch extends AuthenticationComponent {

    render() {

        return (<div >

            <div className="ibox float-e-margins">

                <div className="ibox-title">
                    <h5><i className="fa fa-braille" aria-hidden="true"></i>Branch </h5>
                    {
                        this.enableSubmit() ?
                            <span className="text-right pull-right" onClick={this.toggleAddForm.bind(this)}><span className="btn-toggle-crud-form"><i className={["fa", this.props.data.ShowAddForm ? "fa-minus" : 'fa-plus'].join(" ")} aria-hidden="true"></i></span></span> : null
                    }

                </div>

                <div className="ibox-content">

                    <div className={this.props.data.ShowAddForm ? 'row show-div' : 'row hide-div'}>

                        <div className="col-lg-12">
                            {
                                this.enableSubmit() ?
                                    <Form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="row">

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Name" required={true}>
                                                    <Input type="text" autoFocus={true} placeholder="Enter branch name" className="form-control" name="BranchName" value={this.props.data.BranchName} onChange={this.props.onChange}/>
                                                </FormGroup>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Branch Type" required={true}>
                                                    <Dropdown multi={false} name="BranchTypeId" updateAlways={true} dataSource={this.props.data.BranchTypeList.toArray()} value={this.props.data.BranchTypeId} onChange={this.props.onChange} placeholder="Select branch type" />
                                                </FormGroup>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Time Zone" required={true}>
                                                    <Dropdown multi={false} name="TimezoneId" updateAlways={true} dataSource={this.props.data.TimeZoneList.toArray()} value={this.props.data.TimezoneId} onChange={this.props.onChange} placeholder="Select time zone" />
                                                </FormGroup>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Currency" required={true}>
                                                    <Dropdown multi={false} name="CurrencyId" updateAlways={true} dataSource={this.props.data.CurrencyList.toArray()} value={this.props.data.CurrencyId} onChange={this.props.onChange} placeholder="Select currency" />
                                                </FormGroup>
                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Email" >
                                                    <Input type="text" placeholder="Enter bracch email" className="form-control" name="Email" value={this.props.data.Email} onChange={this.props.onChange}/>
                                                </FormGroup>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Country" >
                                                    <Dropdown multi={false} name="CountryId" updateAlways={true} dataSource={this.props.data.CountryList.toArray()} value={this.props.data.CountryId} onChange={this.props.onChange} placeholder="Select country" />
                                                </FormGroup>
                                            </div>

                                              <div className="col-lg-3">
                                                <FormGroup label="State" required={true}>
                                                    <Dropdown multi={false} name="StateId" updateAlways={true} dataSource={this.props.data.StateList.toArray()} value={this.props.data.StateId} onChange={this.props.onChange} placeholder="Select state" />
                                                </FormGroup>
                                            </div>

                                                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="City" >
                                                    <Input type="text" placeholder="Enter City" className="form-control" name="City" value={this.props.data.City} onChange={this.props.onChange}/>
                                                </FormGroup>
                                            </div>

                                        </div>

                                        <div className="row">

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Zip" >
                                                    <Input type="text" placeholder="Enter zip" maxLength="8" className="form-control" name="Zip" value={this.props.data.Zip} onChange={this.props.onChange}/>
                                                </FormGroup>
                                            </div>

                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                <FormGroup label="Address" >
                                                    <TextArea placeholder="Enter address" className="form-control" name="Address" value={this.props.data.Address} onChange={this.props.onChange}/>
                                                </FormGroup>
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
                            <Grid showFilter={false} primaryKey="Id" enableEdit={this.props.data.enableUpdate} enableDelete={this.props.data.enableDelete} resultsPerPage={10} data={this.props.data.BranchList.toArray()}
                                editAction={this.props.onEdit} deleteAction={this.props.onDelete} columns={["BranchName", "Id"]} /> : null
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

        this.props.dispatch(actionCreator("BRANCH", "CLEAR_STATE"))
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
            'BranchName': { 'presence': true },
            'Email': { 'presence': true, 'email': true },
            'Address': { 'presence': true },
            'CountryId': { 'presence': true },
            'StateId': { 'presence': true },
            'TimezoneId': { 'presence': true },
            'CurrencyId': { 'presence': true },
            'BranchTypeId': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("BRANCH", "SUBMIT_ITEM"));

        } else {
            showValidations("Fix the following errors to continue !", validations);
        }
    }

    toggleAddForm() {

        let action = actionCreator("BRANCH", "INPUT_CHANGED", { 'name': 'ShowAddForm', 'value': !this.props.data.ShowAddForm });
        this.props.dispatch(action);
    }

    componentDidMount() {

        this.props.dispatch(actionCreator("BRANCH", "INPUT_CHANGED", { name: "init" }))
    }
}

let mapStateToProps = function (state) {

    return {
        'data': state.hr.company.branch.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {

    return {
        dispatch,
        onChange: function (name, value) {

            dispatch(actionCreator("BRANCH", "INPUT_CHANGED", { name, value }))
        },
        onEdit: function (id) {

            dispatch(actionCreator("BRANCH", "EDIT_ITEM", { id }));
        },
        onDelete: function (id) {

            showDialog("Are you sure to remove this branch ?", () => {

                dispatch(actionCreator("BRANCH", "REMOVE_ITEM", { id }));
            });
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Branch) 