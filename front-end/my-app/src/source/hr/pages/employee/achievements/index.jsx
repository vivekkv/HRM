import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Achievements extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add Achievement</h5>
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
                                <FormGroup label="Foward to" required={true}>
                                    <Dropdown multi={false} name="ForwardTo" updateAlways={true} dataSource={this.props.data.ForwardToList.toArray()} value={this.props.data.ForwardTo} onChange={this.props.onChange} placeholder="Select forward to" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Achievement title" required={true}>
                                    <Input type="text" placeholder="Enter achievement title" className="form-control" name="AchievementTitle" value={this.props.data.AchievementTitle} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Achievement Date" required={true}>
                                    <Input type="date" placeholder="Enter achievement date" className="form-control" name="AchievementDate" value={this.props.data.AchievementDate} />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
        'data': state.hr.employee.achievement.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Achievements)