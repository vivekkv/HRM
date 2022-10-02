import React from 'react';

class NotAuthorized extends React.Component {
    render() {
        return (<div className="middle-box text-center animated fadeInDown">
            <h1>403</h1>
            <h3 className="font-bold">Not authorized</h3>
            <div className="error-desc">
                Sorry, but the page you are looking for has note been authorized for you
            </div>
        </div>)
    }

    onGoBack() {
        this.context.router.goBack()
    }
}

NotAuthorized.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = NotAuthorized