import React from 'react';
import Input from 'staticComponents/input';
import { List } from 'immutable';
import _ from 'lodash';

export default class ShiftDetail extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        
        return (<div className="row">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Week day</th>
                        <th>Begin time</th>
                        <th>End time</th>
                        <th>Am cut off time</th>
                        <th>Pm cut off time</th>
                        <th>Am end time</th>
                        <th>Pm begin time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.toArray().map((i) => {
                            return (<tr>
                                <td>{i.DayName}</td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="BeginTime" value={i.BeginTime} placeholder="enter begin time" onChange={this.onChange} />
                                </td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="EndTime" value={i.EndTime} placeholder="enter end time" onChange={this.onChange} />
                                </td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="AmCutOffTime" value={i.AmCutOffTime} placeholder="enter AM cut off time" onChange={this.onChange} />
                                </td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="PmCutOffTime" value={i.PmCutOffTime} placeholder="enter PM cut off time" onChange={this.onChange} />
                                </td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="AmEndTime" value={i.AmEndTime} placeholder="enter AM end time" onChange={this.onChange} />
                                </td>
                                <td>
                                    <Input data_id={i.Id} returnTarget={true} className="form-control tlnt-input-one" name="PmBeginTime" value={i.PmBeginTime} placeholder="enter PM begin time" onChange={this.onChange} />
                                </td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
        )
    }

    onChange(e) {

        let value = e.target.value;
        let id = e.target.getAttribute("data-id");
        let field = e.target.getAttribute("name");

        let shiftList = this.props.data.toArray();
        let shiftItem = _.find(shiftList, (i) => { return i.Id == Number(id) });
        shiftItem[field] = value;

        this.props.onChange("shiftDeatils", List(this.createNewCopy(shiftList)));
    }

    createNewCopy(shiftList) {
        
        let shiftDetails = [];
        shiftList.forEach((o) => {

            shiftDetails.push(Object.assign({}, o));
        })
        return shiftDetails
    }
} 