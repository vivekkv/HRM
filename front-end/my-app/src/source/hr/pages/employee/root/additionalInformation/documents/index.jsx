import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Textarea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import FileUpload from 'staticComponents/fileupload';
import DocumentList from './list.jsx';
import validate from 'validate.js';
import { clearValidationHighlights } from 'utils';
import { showValidations } from 'utils/notification';
import actionCreator from '../../../../../actions/actionCreator';

export default class Documents extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">

                    <Form onSubmit={this.onSubmit.bind(this)}>

                        <div className="col-sm-3">
                            <FormGroup label="Name" required={true}>
                                <Input type="text" autoFocus={true} placeholder="Enter branch name" className="form-control" name="DocumentName" value={this.props.data.DocumentName} onChange={this.props.onChange} />
                            </FormGroup>
                        </div>
 
                        <div className="col-sm-3">
                            <FormGroup label="Document type" required={true}>
                                <Dropdown multi={false} name="DocumentTypeId" updateAlways={true} dataSource={this.props.data.DocumentTypeList.toArray()} value={this.props.data.DocumentTypeId} onChange={this.props.onChange} placeholder="Select document type" />
                            </FormGroup>
                        </div>

                        <div className="col-sm-2">
                            <FormGroup label="Choose file" required={true}>
                                  <FileUpload className="form-control" supportedExtensions={["doc", "docx", "pdf"]} maxSizeToUpload={6485760} name="DocumentFile" value={this.props.data.DocumentFile} onChange={this.props.onChange} />
                            </FormGroup>
                        </div>
                        

                        <div className="col-sm-2">
                            <br />
                            <button className="btn btn_reset pull-left" type="submit" ><i className="fa fa-plus" aria-hidden="true"></i> </button>
                        </div>
                    </Form>

                    <DocumentList data={this.props.data.EmployeeDocumentList.toArray()} dispatch={this.props.dispatch} /> 

                </div>
            </div>
        </div >)
    }

    onSubmit(e) {

        e.preventDefault();

        let constraints = {
            'DocumentTypeId': { 'presence': true },
            'DocumentName': {  'presence': true },
            'DocumentFile': {  'presence': true },
        };

        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(actionCreator("EMPLOYEE", "ADD_DOCUMENT_TO_LIST"));

        } else {

            showValidations("Fix the following errors to continue !", validations);
        }
    }
}