import React from 'react';
import Auth from 'helpers/auth.js'

export default class AuthorizeComponent extends React.Component {

    render() {

        if (this.isValid()) {

            return (this.props.children);
        }

        if (this.props.hideChildren) {

            return null;

        } else {

            return <p>You are not allowed to do this operation</p>
        }
    }

    isValid() {

        if(Array.isArray(this.props.operationCode)) {

            let isAuthorized = false;

            this.props.operationCode.forEach((i) => {

                if(!isAuthorized) {

                    isAuthorized = Auth.isAuthorized(i)
                }
            });

            return isAuthorized;
        } else {

            return Auth.isAuthorized(this.props.operationCode);
        }
    }
}