import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'staticComponents/dropdown';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';

class SalaryComponent extends React.Component {

    render() {
        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Salary Component</h5>
                </div>
                <div className="ibox-content">

                    <Form>
                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                            <FormGroup label="Name">
                                <Input className="form-control tlnt-input-one" autoFocus={true} name="PayElementName" value={this.props.data.PayElementName} placeholder="Enter salary component name" onChange={this.props.onChange} />
                            </FormGroup>
                        </div>

                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                            <FormGroup label="Display Order">
                                <Input type="number" maxLength={2} className="form-control tlnt-input-one" name="DisplayOrder" value={this.props.data.DisplayOrder} placeholder="Enter salary component display order" onChange={this.props.onChange} />
                            </FormGroup>
                        </div>

                        <div className="col-md-3 col-xs-12 col-sm-12 col-lg-3">
                            <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                                <FormGroup label="">
                                    <label>
                                        <span>Is Deduction</span>
                                        <Input type="checkbox" className="form-control tlnt-input-one" name="IsDeduction" value={this.props.data.IsDeduction} checked={this.props.data.IsDeduction} onChange={this.props.onChange} />
                                    </label>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                                <FormGroup label="">
                                    <label>
                                        <span>Is Formula Based</span>
                                        <Input type="checkbox" className="form-control tlnt-input-one" name="IsFormulaBased" value={this.props.data.IsFormulaBased} checked={this.props.data.IsFormulaBased} onChange={this.props.onChange} />
                                    </label>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                                <FormGroup label="">
                                    <label>
                                        <span>Is Editable</span>
                                        <Input type="checkbox" className="form-control tlnt-input-one" name="IsEditable" value={this.props.data.IsEditable} checked={this.props.data.IsEditable} onChange={this.props.onChange} />
                                    </label>
                                </FormGroup>
                            </div>
                            <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6">
                                <FormGroup label="">
                                    <label>
                                        <span>Is Round Up</span>
                                        <Input type="checkbox" className="form-control tlnt-input-one" name="IsRoundUp" value={this.props.data.IsRoundUp} checked={this.props.data.IsRoundUp} onChange={this.props.onChange} />
                                    </label>
                                </FormGroup>

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
        'data': state.hr.payroll.salaryComponent.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(SalaryComponent);