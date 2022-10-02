import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Dropdown from 'staticComponents/dropdown';
import FormGroup from 'staticComponents/formGroup'; 
import TextArea from 'staticComponents/textarea';

class Project extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-window-maximize" aria-hidden="true"></i>Add Project </h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Project Title" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter project title" className="form-control" name="ProjectTitle" value={this.props.data.ProjectTitle} />
                                        </FormGroup>
                                    </div>
                                     <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Client Name" required={true}>
                                            <Input type="text" placeholder="Enter client name" className="form-control" name="ClientName" value={this.props.data.ClientName} />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Project Start Date" required={true}>
                                            <Input type="text" placeholder="Enter project start date" className="form-control" name="ProjectStartDate" value={this.props.data.ProjectStartDate} />
                                        </FormGroup>
                                    </div>
                                      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Project End Date" required={true}>
                                            <Input type="text" placeholder="Enter project end date" className="form-control" name="ProjectEndDate" value={this.props.data.ProjectEndDate} />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Company" required={true}>
                                            <Dropdown multi={false} name="Company" updateAlways={true} dataSource={this.props.data.companyList.toArray()} value={this.props.data.Company} onChange={this.props.onChange} placeholder="Select company" />
                                        </FormGroup>
                                    </div>
                                     <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Branch" required={true}>
                                            <Dropdown multi={false} name="Branch" updateAlways={true} dataSource={this.props.data.BranchList.toArray()} value={this.props.data.Branch} onChange={this.props.onChange} placeholder="Select branch" />
                                        </FormGroup>
                                    </div>
                                     <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Department" required={true}>
                                            <Dropdown multi={false} name="Department" updateAlways={true} dataSource={this.props.data.DepartmentList.toArray()} value={this.props.data.Department} onChange={this.props.onChange} placeholder="Select department" />
                                        </FormGroup>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Employees" required={true}>
                                            <Dropdown multi={false} name="Employees" updateAlways={true} dataSource={this.props.data.EmployeesList.toArray()} value={this.props.data.Employees} onChange={this.props.onChange} placeholder="Select Employees" />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <FormGroup label="Project Description" required={true}>
                                            <TextArea placeholder="Enter project description" className="form-control" name="Description" value={this.props.data.Description} />
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
        'data': state.hr.project.root.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Project) 