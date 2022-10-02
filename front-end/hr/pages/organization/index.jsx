import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import FormGroup from 'staticComponents/formGroup';

class Organization extends React.Component {

    render() {
        return (<div >
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-window-restore" aria-hidden="true"></i>Organization</h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <FormGroup label="Name" required={true}>
                                            <Input type="text" autoFocus={true} placeholder="Enter company name" className="form-control" name="Name" value={this.props.data.Name} />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn_submit pull-right" type="submit"><i className="fa fa-check" aria-hidden="true"></i> Submit</button>
                                    <button type="reset" className="btn btn_reset pull-right" type="submit"><i className="fa fa-eraser" aria-hidden="true"></i> Reset</button>
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
        'data': state.hr.organization.root.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Organization) 