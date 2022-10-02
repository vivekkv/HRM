import React from 'react';
import { Link } from 'react-router';
import { capitalizeFirstLetter } from 'utils';

export default class Breadcrumb extends React.Component {

    render() {
        return (<div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
                <h2>{this.getCurrentModule()}</h2>
                <ol className="breadcrumb">
                    {this.getUpdatedRoutes().map((item, index) =>
                        <li key={index} className={item.last ? "active" : ""}>
                            <Link onlyActiveOnIndex={true} activeClassName="breadcrumb-active" to={item.last ? "" : (item.path || '')}> {item.pathName || ''}</Link>
                        </li>
                    )}
                </ol>
            </div>
            <div className="col-lg-2">
            </div>
        </div>)
    }

    getCurrentModule() {
        if(this.props.routes.length == 1) {
            return capitalizeFirstLetter(this.props.routes[0].path);
        }
        else if (this.props.routes.length >= 2) {
             return capitalizeFirstLetter(this.props.routes[1].path);
        }
        return "";
    }

    getUpdatedRoutes() {

        if (this.props.routes.length == 2) {
            alert()
        } else if (this.props.routes.length == 3) {

        }


        return [];
        // let bindedRoutes = [{
        //     path: "hr/home",
        //     pathName: "Home",
        //     index: 0
        // }];
        
        // if (this.props.routes.length > 2) {

        //     let parentRoute = this.props.routes[1];
        //     parentRoute.pathName = parentRoute.path.replace(/^\//, "");
        //     parentRoute.last = (!this.props.routes[2] || !this.props.routes[2].path);


        //     parentRoute.path = "hr/" + parentRoute.path;
        //     bindedRoutes.push(parentRoute);
        //     let childRoute = this.props.routes[2];


        //     if (childRoute.path) {

        //         childRoute.path = "hr/" + childRoute.path;
        //         childRoute.pathName = childRoute.path.replace(/^\//, "").split("/")[0];
        //         childRoute.last = true;
        //         bindedRoutes.push(childRoute);
        //     }

        // } else {
        //     bindedRoutes[0].last = true;
        // }
        return bindedRoutes
    }
}

Breadcrumb.propTypes = {
    routes: React.PropTypes.array.isRequired
};

Breadcrumb.contextTypes = {
    router: React.PropTypes.object.isRequired
};