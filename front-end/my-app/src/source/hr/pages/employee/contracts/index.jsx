import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Contracts extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add Employee Contracts</h5>
                </div>
                <div className="ibox-content">
                    <Form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee" required={true}>
                                    <Dropdown multi={false} name="Employee" updateAlways={true} dataSource={this.props.data.EmployeeList.toArray()} value={this.props.data.Employee} onChange={this.props.onChange} placeholder="Select employee" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Contract Type" required={true}>
                                    <Dropdown multi={false} name="ContractType" updateAlways={true} dataSource={this.props.data.ContractTypeList.toArray()} value={this.props.data.ContractType} onChange={this.props.onChange} placeholder="Select contract type" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Contract Title" required={true}>
                                    <Input type="text" placeholder="Enter contract title" className="form-control" name="ContractTitle" value={this.props.data.ContractTitle} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Start Date" required={true}>
                                    <Input type="text" placeholder="Enter start date" className="form-control" name="StartDate" value={this.props.data.StartDate} />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="End Date" required={true}>
                                    <Input type="text" placeholder="Enter end date" className="form-control" name="EndDate" value={this.props.data.EndDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee Designation" required={true}>
                                    <Dropdown multi={false} name="Designation" updateAlways={true} dataSource={this.props.data.DesignationList.toArray()} value={this.props.data.Designation} onChange={this.props.onChange} placeholder="Select designation" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee Type" required={true}>
                                    <Dropdown multi={false} name="EmployeeType" updateAlways={true} dataSource={this.props.data.EmployeeTypeList.toArray()} value={this.props.data.EmployeeType} onChange={this.props.onChange} placeholder="Select employee type" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Employee Category" required={true}>
                                    <Dropdown multi={false} name="EmployeeCategory" updateAlways={true} dataSource={this.props.data.EmployeeCategoryList.toArray()} value={this.props.data.EmployeeCategory} onChange={this.props.onChange} placeholder="Select employee category" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="End Grade" required={true}>
                                    <Dropdown multi={false} name="EmployeeGrade" updateAlways={true} dataSource={this.props.data.EmployeeGradeList.toArray()} value={this.props.data.EmployeeGrade} onChange={this.props.onChange} placeholder="Select employee grade" />
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
                                <FormGroup label="Description" required={true}>
                                    <Input type="text" placeholder="Enter description" className="form-control" name="Description" value={this.props.data.Description} />
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
        'data': state.hr.employee.contract.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contracts)