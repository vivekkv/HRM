import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import TextArea from 'staticComponents/textarea';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';

export default class UserInformation extends React.Component {

    render() {
        return (<div className="ibox-content">
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <Form onSubmit={this.onBasicInformationSubmit.bind(this)}>
                        <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-1">
                                <FormGroup label="Allow Login" required={true}>
                                    <Input type="checkbox" name="AllowLogin" className="form-control" value={this.props.data.AllowLogin} onChange={this.props.onChange}  />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="User Name" required={true}>
                                    <Input name="UserName" className="form-control" value={this.props.data.UserName} onChange={this.props.onChange} placeholder="Enter username" />
                                </FormGroup>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                <FormGroup label="Password" required={true}>
                                    <Input name="Password" className="form-control" value={this.props.data.Password} onChange={this.props.onChange} placeholder="Enter password" />
                                </FormGroup>
                            </div>
                           
                        </div>
                    </Form>
                </div>
            </div>
        </div>)
    }

    onBasicInformationSubmit(e) {
        e.preventDefault();
    }
}