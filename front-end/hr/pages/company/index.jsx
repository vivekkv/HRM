import React from 'react';
import { connect } from 'react-redux';
import AuthenticationComponent from '../../../components/Base/AuthenticationComponent';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Dropdown from 'staticComponents/dropdown';
import FormGroup from 'staticComponents/formGroup';
import TextArea from 'staticComponents/textarea';
import Grid from 'staticComponents/grid';
import actionCreator from '../../actions/actionCreator';
import { clearValidationHighlights, showDialog, enableSubmitCheck } from 'utils';
import { showValidations } from 'utils/notification';
import validate from 'validate.js';


class Company extends AuthenticationComponent {

    render() {

        return (<div >

            <div className="ibox float-e-margins">

                <div className="ibox-title">
                    <h5><i className="fa fa-circle-thin" aria-hidden="true"></i>Company </h5>
                    {
                        this.enableSubmit()  ?
                            <span className="text-right pull-right" onClick={this.toggleAddForm.bind(this)}><span className="btn-toggle-crud-form"><i className={["fa", this.props.data.ShowAddForm ? "fa-minus" : 'fa-plus'].join(" ")} aria-hidden="true"></i></span></span> : null
                    }

                </div>

                <div className="ibox-content">

                    <div className={this.props.data.ShowAddForm ? 'row show-div' : 'row hide-div'}>

                        <div className="col-lg-12">
                            {
                                this.enableSubmit()  ?
                                    <Form onSubmit={this.onSubmit.bind(this)}>

                                        <div className="row">

                                            <div className="col-lg-3">
                                                <FormGroup label="Name" required={true}>
                                                    <Input type="text" autoFocus={true} placeholder="Enter company name" className="form-control" name="Name" value={this.props.data.Name} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Trading / Legal Name">
                                                    <Input type="text" placeholder="Enter trading or legal name" className="form-control" name="TradeName" value={this.props.data.TradeName} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Registration Number">
                                                    <Input type="text" placeholder="Enter registration number" className="form-control" name="RegistrationNo" value={this.props.data.RegistrationNo} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Company Type" >
                                                    <Dropdown multi={false} name="CompanyTypeId" updateAlways={true} dataSource={this.props.data.CompanyTypeList.toArray()} value={this.props.data.CompanyTypeId} onChange={this.props.onChange} placeholder="Select company type" />
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-lg-3">
                                                <FormGroup label="Email" required={true}>
                                                    <Input type="text" placeholder="Enter company email" className="form-control" name="Email" value={this.props.data.Email} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Contact Person" >
                                                    <Input type="text" placeholder="Enter contact person" className="form-control" name="ContactPerson" value={this.props.data.ContactPerson} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Contact Number" >
                                                    <Input type="text" placeholder="Enter contact number" className="form-control" name="ContactNumber" value={this.props.data.ContactNumber} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Website" >
                                                    <Input type="text" placeholder="Enter web site" className="form-control" name="Website" value={this.props.data.Website} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-lg-3">
                                                <FormGroup label="Government Tax Number / EIN" >
                                                    <Input type="text" placeholder="Enter Government Tax Number / EIN" className="form-control" name="TaxNumber" value={this.props.data.TaxNumber} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Country" required={true}>
                                                    <Dropdown multi={false} name="CountryId" updateAlways={true} dataSource={this.props.data.CountryList.toArray()} value={this.props.data.CountryId} onChange={this.props.onChange} placeholder="Select country" />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="State" required={true}>
                                                    <Dropdown multi={false} name="StateId" updateAlways={true} dataSource={this.props.data.StateList.toArray()} value={this.props.data.StateId} onChange={this.props.onChange} placeholder="Select state" />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="City">
                                                    <Input type="text" placeholder="Enter City" className="form-control" name="City" value={this.props.data.City} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-lg-3">
                                                <FormGroup label="Zip" >
                                                    <Input type="text" placeholder="Enter zip" maxLength="8" className="form-control" name="Zip" value={this.props.data.Zip} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>

                                            <div className="col-lg-3">
                                                <FormGroup label="Address" required={true}>
                                                    <TextArea placeholder="Enter address" className="form-control" name="Address" value={this.props.data.Address} onChange={this.props.onChange} />
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                {
                                                    this.enableSubmit() ?
                                                        <button className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i> 
                                                            { this.props.data.Id > 0 ? 'Update': 'Create' }
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
                            <Grid showFilter={false} primaryKey="Id" enableEdit={this.props.data.enableUpdate} enableDelete={this.props.data.enableDelete} resultsPerPage={10} data={this.props.data.companyList.toArray()}
                                editAction={this.props.onEdit} deleteAction={this.props.onDelete} columns={["Name", "Id"]} /> : null
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

        this.props.dispatch(actionCreator("COMPANY", "CLEAR_STATE"))
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
            'Name': { 'presence': true },
            'Email': { 'presence': true, 'email': true },
            'Address': { 'presence': true },
            'CountryId': { 'presence': true },
            'StateId': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("COMPANY", "SUBMIT_ITEM"));

        } else {
            showValidations("Fix the following errors to continue !", validations);
        }
    }

    toggleAddForm() {

        let action = actionCreator("COMPANY", "INPUT_CHANGED", { 'name': 'ShowAddForm', 'value': !this.props.data.ShowAddForm });
        this.props.dispatch(action);
    }

    componentDidMount() {

        this.props.dispatch(actionCreator("COMPANY", "INPUT_CHANGED", { name: "init" }))
    }
}

let mapStateToProps = function (state) {

    return {
        'data': state.hr.company.root.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {

    return {
        dispatch,
        onChange: function (name, value) {
            
            dispatch(actionCreator("COMPANY", "INPUT_CHANGED", { name, value }))
        },
        onEdit: function (id) {

            dispatch(actionCreator("COMPANY", "EDIT_ITEM", { id }));
        },
        onDelete: function (id) {

            showDialog("Are you sure to remove this company ?", () => {

                dispatch(actionCreator("COMPANY", "REMOVE_ITEM", { id }));
            });
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Company) 