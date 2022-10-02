import React from 'react';
import actionCreator from '../../../../../actions/actionCreator';

export default class GalleryList extends React.Component {

    render() {

        return (<div>
            <div className="row">
                <div className="col-sm-5 m-b-xs">

                </div>
                <div className="col-sm-4 m-b-xs">

                </div>

            </div>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Action</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((i) => {

                                return (<tr>
                                    <td>
                                    </td>
                                    <td>{i.DocumentName}</td>
                                    <td>
                                        <a><i className="fa fa-remove text-navy" data-id={i.uId} onClick={this.onDelete.bind(this)}></i></a>
                                        {
                                            i.Id > 0 ? <a><i className="fa fa-circlee-o text-navy" data-id={i.uId}></i></a> : null
                                        }
                                    </td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
            </div></div>)
    }

    onDelete(e) {

        let id = e.target.getAttribute("data-id");
        this.props.dispatch(actionCreator("EMPLOYEE", "REMOVE_GALLERY", { id }));
    }

}