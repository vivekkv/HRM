import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class JobPost extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Post New Job</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Job Title" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter job title" className="form-control" name="JobTitle" value={this.props.data.JobTitle} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Forward Application To" required={true}>
                                            <Dropdown multi={false} name="ForwardApplicationTo" updateAlways={true} dataSource={this.props.data.DepartmentHeadsList.toArray()} value={this.props.data.ForwardApplicationTo} onChange={this.props.onChange} placeholder="Select forward application to" />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Department" required={true}>
                                            <Dropdown multi={false} name="Department" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.Department} onChange={this.props.onChange} placeholder="Select department" />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Job Type" required={true}>
                                            <Dropdown multi={false} name="JobType" updateAlways={true} dataSource={this.props.data.JobTypeList.toArray()} value={this.props.data.JobType} onChange={this.props.onChange} placeholder="Select job type" />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Number Of Positions" required={true}>
                                            <Input type="number" placeholder="Enter No Of Positions" className="form-control" name="NoOfPositions" value={this.props.data.NoOfPositions} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Candidate Age From" required={true}>
                                            <Input type="number" placeholder="Enter candidate age from" className="form-control" name="CandidateAgeFrom" value={this.props.data.CandidateAgeFrom} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Candidate Age To" required={true}>
                                            <Input type="number" placeholder="Enter candidate age to" className="form-control" name="CandidateAgeTo" value={this.props.data.CandidateAgeTo} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Job Location" required={true}>
                                            <Input type="number" placeholder="Enter job location" className="form-control" name="JobLocation" value={this.props.data.JobLocation} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Salary Start Range" required={true}>
                                            <Input type="number" placeholder="Enter salary start range" className="form-control" name="SalaryStartRange" value={this.props.data.SalaryStartRange} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Salary End Range" required={true}>
                                            <Input type="number" placeholder="Enter salary end range" className="form-control" name="SalaryEndRange" value={this.props.data.SalaryEndRange} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Description" required={true}>
                                            <TextArea type="number" placeholder="Enter Job Description" className="form-control" name="Description" value={this.props.data.Description} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Candidate Qualification" required={false}>
                                            <TextArea type="number" placeholder="Enter Candidate Qualification" className="form-control" name="CandidateQualification" value={this.props.data.CandidateQualification} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Candidate Experience" required={false}>
                                            <TextArea type="number" placeholder="Enter candidate experience" className="form-control" name="CandidateExperience" value={this.props.data.CandidateExperience} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Additional Information" required={false}>
                                            <TextArea type="number" placeholder="Enter additional information" className="form-control" name="AdditionalInformation" value={this.props.data.AdditionalInformation} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <button className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i> Submit</button>
                                    <button className="btn btn_reset pull-right" type="submit"><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
                                </div>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.recruitement.jobpost.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(JobPost) 