import React from 'react'
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

class Resignation extends React.Component {

    render() {

        return (<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-clipboard" aria-hidden="true"></i>Add Resignation</h5>
                </div>
                <div className="ibox-content">
                    <Form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Forward To" required={true}>
                                    <Dropdown multi={false} name="ForwardTo" updateAlways={true} dataSource={this.props.data.ForwardToList.toArray()} value={this.props.data.ForwardTo} onChange={this.props.onChange} placeholder="Select forward to" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Notice Date" required={true}>
                                    <Input type="date" placeholder="Enter notice Date" className="form-control" name="NoticeDate" value={this.props.data.NoticeDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Resignation Date" required={true}>
                                    <Input type="date" placeholder="Enter resignation Date" className="form-control" name="ResignationDate" value={this.props.data.ResignationDate} />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Reason" required={true}>
                                    <TextArea type="data" placeholder="Enter resignation reason" className="form-control" name="Reason" value={this.props.data.Reason} />
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
        'data': state.hr.employee.resignation.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Resignation)