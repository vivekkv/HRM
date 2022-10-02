import React from 'react';
import actionCreator from '../../../../../actions/actionCreator';

export default class ExperienceList extends React.Component {

    render() {

        let experiences  = _.filter(this.props.data, (i) => { return i.Status == true });

        return (<div> 
            <div className="row">
                <div className="col-sm-5 m-b-xs">

                </div>
                <div className="col-sm-4 m-b-xs">

                </div>
 
                <div className="col-sm-3">
                    <input type="text" placeholder="Search" className="input-sm form-control" />
                </div>

            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Firm</th>
                            <th>From Year</th>
                            <th>To Year</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            experiences.map((i) => {

                                return (<tr>
                                    <td>
                                    </td>
                                    <td>{i.Firm}</td>
                                    <td>{i.FromYear}</td>
                                    <td>{i.ToYear}</td>
                                    <td><a ><i className="fa fa-remove text-navy" data-id={i.uId} onClick={this.onDelete.bind(this)}></i></a></td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
            </div></div>)
    }

    onDelete(e) {

        let id = e.target.getAttribute("data-id");
        this.props.dispatch(actionCreator("EMPLOYEE", "REMOVE_EXPERIENCE", { id }));
    }

}