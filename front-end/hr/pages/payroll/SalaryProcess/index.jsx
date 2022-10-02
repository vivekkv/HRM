import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';

class SalaryProcess extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Salary Process</h5>
                </div>
                <div className="ibox-content">
                    <Form>

                        <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4">
                            <FormGroup label="Payperiod">
                                <Dropdown multi={false} name="PayPeriodId" updateAlways={true} dataSource={this.props.data.payPeriodList.toArray()} value={this.props.data.PayPeriodId} onChange={this.props.onChange} placeholder="Select pay period" />
                            </FormGroup>
                        </div>

                        <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4">
                            <FormGroup label="Position">
                                <Dropdown multi={false} name="PositionId" updateAlways={true} dataSource={this.props.data.positionList.toArray()} value={this.props.data.PositionId} onChange={this.props.onChange} placeholder="Select position" />
                            </FormGroup>
                        </div>

                        <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4">
                            <FormGroup label="Department">
                                <Dropdown multi={false} name="DepartmentId" updateAlways={true} dataSource={this.props.data.departmentList.toArray()} value={this.props.data.DepartmentId} onChange={this.props.onChange} placeholder="Select department" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <button className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i> Submit</button>
                            <button className="btn btn_reset pull-right" type="submit"><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
        )
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.payroll.salaryProcess.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SalaryProcess);