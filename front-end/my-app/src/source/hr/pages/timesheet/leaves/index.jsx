import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Leaves extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Leaves</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Employee" required={true}>
                                            <Dropdown multi={false} name="Employee" updateAlways={true} dataSource={this.props.data.EmployeeList.toArray()} value={this.props.data.Employee} onChange={this.props.onChange} placeholder="Select employee" />
                                        </FormGroup>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Leave Type" required={true}>
                                            <Dropdown multi={false} name="LeaveType" updateAlways={true} dataSource={this.props.data.LeaveTypeList.toArray()} value={this.props.data.LeaveType} onChange={this.props.onChange} placeholder="Leave Type" />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Alternate Contact Number" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Alternate Contact Number" className="form-control" name="AlternateContactNumber" value={this.props.data.AlternateContactNumber} />
                                        </FormGroup>
                                    </div>


                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Leave From" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Leave From" className="form-control" name="LeaveFrom" value={this.props.data.LeaveFrom} />
                                        </FormGroup>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Leave To" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Leave To" className="form-control" name="LeaveTo" value={this.props.data.LeaveTo} />
                                        </FormGroup>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Reason" required={true}>
                                            <TextArea autoFocus={false} placeholder="Reasons" className="form-control" name="Reasons" value={this.props.data.Reasons} />
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
        'data': state.hr.timesheet.leaves.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Leaves) 