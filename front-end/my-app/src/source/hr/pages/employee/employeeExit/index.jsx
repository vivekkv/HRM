import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class EmployeeExit extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add Employee Exit</h5>
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
                                <FormGroup label="Exit Date Type" required={true}>
                                    <Input type="text" placeholder="Enter start date" className="form-control" name="ExitDate" value={this.props.data.ExitDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Type of exit" required={true}>
                                    <Dropdown multi={false} name="ExitType" updateAlways={true} dataSource={this.props.data.ExitTypeList.toArray()} value={this.props.data.ExitType} onChange={this.props.onChange} placeholder="Select exit type" />
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
        'data': state.hr.employee.employeeExit.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(EmployeeExit)