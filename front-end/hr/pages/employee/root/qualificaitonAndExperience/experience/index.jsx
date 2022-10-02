import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Textarea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import FileUpload from 'staticComponents/fileupload';
import ExperienceList from './list';
import validate from 'validate.js';
import { clearValidationHighlights } from 'utils';
import { showValidations } from 'utils/notification';
import actionCreator from '../../../../../actions/actionCreator';


export default class Experience extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">

                    <Form onSubmit={this.onSubmit.bind(this)}>

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Firm" required={true}>
                                    <Input name="Firm" className="form-control" value={this.props.data.Firm} onChange={this.props.onChange} placeholder="Enter firm name" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="From Year" required={true}>
                                    <Input type="number" name="ExperienceFromYear" className="form-control" value={this.props.data.ExperienceFromYear} onChange={this.props.onChange} placeholder="Enter from year" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" required={true}>
                                <FormGroup label="To Year">
                                    <Input type="number" name="ExperienceToYear" className="form-control" value={this.props.data.ExperienceToYear} onChange={this.props.onChange} placeholder="Enter to year" />
                                </FormGroup>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Experience Certificate" required={true}>
                                    <FileUpload className="form-control" supportedExtensions={["doc", "docx", "pdf"]} maxSizeToUpload={6485760} name="ExperienceCertificate" value={this.props.data.ExperienceCertificate} onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                        </div>

                        <div className="row">

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


                        <ExperienceList data={this.props.data.EmployeeExperienceList.toArray()} dispatch={this.props.dispatch}/>

                </div>
            </div>
        </div >)
    }

    onSubmit(e) {

        e.preventDefault();

        let constraints = {
            'Firm': { 'presence': true },
            'ExperienceFromYear': {
                'presence': true, 'numericality': {
                    'onlyInteger': true,
                }
            },
            'ExperienceToYear': {
                'numericality': {
                    'onlyInteger': true,
                    'greaterThanOrEqualTo': Number(this.props.data.ExperienceFromYear),
                    'lessThanOrEqualTo': new Date().getFullYear()
                }
            },
            'ExperienceCertificate': { 'presence': true }
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("EMPLOYEE", "ADD_EXPERIENCE_TO_LIST"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }

    }
}