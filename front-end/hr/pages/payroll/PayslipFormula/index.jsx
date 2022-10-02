import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';

class PayslipFormula extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Payslip Formula</h5>
                </div>
                <div className="ibox-content">
                    <Form>

                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Salary group">
                                    <Dropdown multi={false} name="SalaryGroup" updateAlways={true} dataSource={this.props.data.salaryGroupList.toArray()} value={this.props.data.SalaryGroup} onChange={this.props.onChange} placeholder="Select salary group" />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Salary Component">
                                    <Dropdown multi={false} name="PayElement" updateAlways={true} dataSource={this.props.data.salaryComponentList.toArray()} value={this.props.data.PayElement} onChange={this.props.onChange} placeholder="Select salary component" />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Formula">
                                    <Input className="form-control tlnt-input-one" name="Formula" value={this.props.data.Formula} placeholder="Enter formula" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>

                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Formula Text">
                                    <Input className="form-control tlnt-input-one" name="FormulaText" disabled={true} value={this.props.data.FormulaText} placeholder="Enter formula text" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Evaluation order">
                                    <Input type="number" className="form-control tlnt-input-one" name="EvaluationOrder" value={this.props.data.EvaluationOrder} placeholder="Enter description" onChange={this.props.onChange} />
                                </FormGroup>
                            </div>
                            <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                                <FormGroup label="Description">
                                    <TextArea className="form-control tlnt-input-one" name="Description" value={this.props.data.Description} placeholder="Enter description" onChange={this.props.onChange} />
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
        )
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.payroll.payslipFormula.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(PayslipFormula)