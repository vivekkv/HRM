import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Textarea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import Grid from 'staticComponents/grid';
import QualificationList from './list';
import validate from 'validate.js';
import { clearValidationHighlights } from 'utils';
import { showValidations } from 'utils/notification';
import actionCreator from '../../../../../actions/actionCreator';

export default class Qualification extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Qualification" required={true}>
                                    <Dropdown multi={false} name="QualificationId" updateAlways={true} dataSource={this.props.data.QualificationList.toArray()} value={this.props.data.QualificationId} onChange={this.props.onChange} placeholder="Select branch" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Institute" required={true}>
                                    <Input name="Institute" className="form-control" value={this.props.data.Institute} onChange={this.props.onChange} placeholder="Enter institute" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" required={true}>
                                <FormGroup label="From Year">
                                    <Input type="number" name="FromYear" className="form-control" value={this.props.data.FromYear} onChange={this.props.onChange} placeholder="Enter from year" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" required={true}>
                                <FormGroup label="To Year">
                                    <Input type="number" name="ToYear" className="form-control" value={this.props.data.ToYear} onChange={this.props.onChange} placeholder="Enter to year" />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Major Specilization">
                                    <Input name="MajorSpecilization" className="form-control" value={this.props.data.MajorSpecilization} onChange={this.props.onChange} placeholder="Enter major specilization" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Description" >
                                    <Textarea name="Description" className="form-control" value={this.props.data.Description} onChange={this.props.onChange} placeholder="Enter description" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
                                <br />
                                <button className="btn btn_reset pull-right" type="submit" ><i className="fa fa-plus" aria-hidden="true"></i> </button>
                            </div>
                        </div>

                    </Form>

                    {/*<Grid showFilter={false} primaryKey="Id" enableEdit={false} enableDelete={true} resultsPerPage={10} data={this.props.data.EmployeeQualificationList.toArray()}
                      deleteAction={this.onDelete.bind(this)} columns={["QualificationName", "Institute", "FromYear", "ToYear", "Id"]} />*/}


                        <QualificationList data={this.props.data.EmployeeQualificationList.toArray()} dispatch={this.props.dispatch}/>
                </div>
            </div>
        </div>)
    }

    onSubmit(e) {

        e.preventDefault();

        let constraints = {
            'QualificationId': { 'presence': true },
            'Institute': { 'presence': true },
            'FromYear': {
                'presence': true, 'numericality': {
                    'onlyInteger': true,
                }
            },
            'ToYear': {
                'presence': true, 'numericality': {
                    'onlyInteger': true,
                    'greaterThanOrEqualTo': Number(this.props.data.FromYear),
                    'lessThanOrEqualTo': new Date().getFullYear()                    
                }
            },
            'MajorSpecilization': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("EMPLOYEE", "ADD_QUALIFICATION_TO_LIST"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }

    }
}