import React from 'react';
import { connect } from 'react-redux';
import Form from 'staticComponents/form';
import FormGroup from 'staticComponents/formGroup';
import Dropdown from 'staticComponents/dropdown';
import Input from 'staticComponents/input'; 
import Button from 'staticComponents/button';
import { inputChanged, submitLogin } from '../../../actions/auth';
import { showValidations } from 'utils/notification';
import { clearValidationHighlights } from 'utils';
import validate from 'validate.js';
import Styles from './styles.css';

class Login extends React.Component {

    render() {


        return (<div className={[Styles.login_wrapper].join(" ")}>

            <div className={[Styles.login_content].join(" ")}>

                <h3 className="text-center">SIGN IN</h3>
                <Form className="m-t" onSubmit={this.onLoginSubmit.bind(this)}>

                    <div className="form-group">
                        <Input autoFocus={true} className="form-control" name="UserName" placeholder="Enter username" value={this.props.data.UserName} onChange={this.props.onChange} />
                    </div>

                    <div className="form-group">
                        <Input type="password" className="form-control" name="Password" placeholder="Enter password" value={this.props.data.Password} onChange={this.props.onChange} />
                    </div>

                    {
                        this.props.data.companyList.toArray().length > 0 ?
                            <FormGroup label=" ">
                                <Dropdown multi={false} name="CompanyId" updateAlways={true} dataSource={this.props.data.companyList.toArray()} value={this.props.data.CompanyId} onChange={this.props.onChange} placeholder="Select company" />
                            </FormGroup>
                            : null
                    }

                    <p className={["text-right", Styles.submit_wrapper].join(" ")}>
                        <label className="error-text">{this.props.data.errorMessage}</label>
                        <Button disabled={this.props.data.disableForm} type="submit" className={[Styles.btn_login, "btn btn-primary block full-width m-b btn_login"].join(" ")}>Login
                            <i className="fa fa-caret-square-o-right" aria-hidden="true"></i>
                        </Button>
                    </p>
                </Form>
            </div>
        </div>)
    }

    onLoginSubmit(e) {

        e.preventDefault();
        let constraints = { 'UserName': { presence: true }, 'Password': { presence: true } };
        let validations = validate(this.props.data, constraints);

        if (!validations) {

            clearValidationHighlights();
            this.props.dispatch(submitLogin());
        } else {
            showValidations("Fix the following errors to continue !", validations);
        }
    }
}

let mapStateToProps = function (state) {
    return {
        'data': state.hr.auth.login.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        onChange: (name, value) => {

            dispatch(inputChanged(name, value));
        }
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Login)