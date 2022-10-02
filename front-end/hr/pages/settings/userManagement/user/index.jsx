import React from 'react';
import Form from 'staticComponents/form';
import Input from 'staticComponents/input';
import Dropdown from 'staticComponents/dropdown';

export default class User extends React.Component {

    render() {
        return <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="ibox float-e-margins">
                <div className="ibox-title">
                    <h5><i className="fa fa-user-circle" aria-hidden="true"></i>Add User </h5>
                </div>
                <div className="ibox-content">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <Form>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <Input type="text" autoFocus={true} placeholder="Enter first name" className="form-control" name="FirstName" value={this.props.data.FirstName} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <Input type="email" placeholder="Enter email" className="form-control" name="email" value={this.props.data.email} />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="form-group">
                                            <label>Role</label>
                                            {/*<Dropdown multi={false} name="RoleId" updateAlways={true} dataSource={this.props.data.roleList.toArray()} value={this.props.data.RoleId} onChange={this.props.onChange} placeholder="Select user role" />*/}
                                        </div>
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
        </div>
    }
}