import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Assignments extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add Assignment</h5>
                </div>
                <div className="ibox-content">
                    <Form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="System Admin" required={true}>
                                    <Dropdown multi={false} name="SystemAdmin" updateAlways={true} dataSource={this.props.data.SystemAdminList.toArray()} value={this.props.data.SystemAdmin} onChange={this.props.onChange} placeholder="Select system admin" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Project" required={true}>
                                    <Dropdown multi={false} name="Project" updateAlways={true} dataSource={this.props.data.ProjectList.toArray()} value={this.props.data.Project} onChange={this.props.onChange} placeholder="Select project" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Assignment Name" required={true}>
                                    <Input type="text" placeholder="Enter assignment name" className="form-control" name="AssignmentName" value={this.props.data.AssignmentName} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Priority" required={true}>
                                    <Dropdown multi={false} name="Priority" updateAlways={true} dataSource={this.props.data.PriorityList.toArray()} value={this.props.data.Priority} onChange={this.props.onChange} placeholder="Select priority" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Start Date" required={true}>
                                    <Input type="text" placeholder="Enter start date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="End Date" required={true}>
                                    <Input type="text" placeholder="Enter end date" className="form-control" name="EndDate" value={this.props.data.EndDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employees" required={true}>
                                    <Dropdown multi={false} name="Employees" updateAlways={true} dataSource={this.props.data.EmployeesList.toArray()} value={this.props.data.Employees} onChange={this.props.onChange} placeholder="Select employees" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Description" required={true}>
                                    <TextArea placeholder="Enter description" className="form-control" name="Description" value={this.props.data.Description} />
                                </FormGroup>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>)
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.employee.assignments.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Assignments)