import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import Radio from 'staticComponents/radio';

class SalaryGroup extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Salary Group</h5>
                </div>
                <div className="ibox-content">
                    <Form >

                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                            <FormGroup label="Name">
                                <Input className="form-control tlnt-input-one" autoFocus={true} name="SalaryGroupName" value={this.props.data.SalaryGroupName} placeholder="Enter salary component name" onChange={this.props.onChange} />
                            </FormGroup>
                        </div>

                        <div className="col-md-3 col-xs-12 col-sm-6 col-lg-3">
                            <div className="col-sm-4">
                                <Radio layout="inline" name="Status" label="Active" value={"A"} className="form-control tlnt_radio_one" checked={this.props.data.Status == "A"} onChange={this.props.onChange} />
                            </div>
                            <div className="col-sm-4">
                                <Radio layout="inline" name="Status" label="Inactive" value={"I"} className="form-control tlnt_radio_one" checked={this.props.data.Status == "I"} onChange={this.props.onChange} />
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                            <FormGroup label="Description">
                                <TextArea className="form-control tlnt-input-one" name="Description" value={this.props.data.Description} placeholder="Enter description" onChange={this.props.onChange} />
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
        'data': state.hr.payroll.salaryGroup.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SalaryGroup);