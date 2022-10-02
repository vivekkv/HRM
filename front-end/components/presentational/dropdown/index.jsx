import React from 'react';
import Select from 'react-select';
import _ from 'lodash';
import uuid from 'node-uuid';

export default class MultiSelectionDropdown extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.instance = null;
    }

    render() {
       
        if(this.props.dataSource) {

            let select = <Select multi={this.props.multi} 
                    name={this.props.name}
                    options={this.props.dataSource}
                    id={this.props.id ? this.props.id : uuid.v1()}
                    value={this.props.value} 
                    onChange={this.onChange}
                    placeholder={this.props.placeholder}
                    resetValue={this.props.resetValue}
                    autoload={this.props.autoload}
                    disabled={this.props.disabled == true ? true: false}
                />
            
            this.instance = select;
            return select
        }

        let selectAsync = <Select multi={this.props.multi} 
                    name={this.props.name}
                    asyncOptions={this.props.asyncOptions}
                    id={this.props.id ? this.props.id : uuid.v1()}
                    autoload={this.props.autoload}
                    cacheAsyncResults={this.props.cacheAsyncResults}
                    value={this.props.value}
                    resetValue={this.props.resetValue}
                    onChange={this.onChange}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled == true ? true: false}
                />
        this.instance = selectAsync;
        return (selectAsync)
    }
    
    onChange(options) {
        if(this.props.onChange) {
            this.props.onChange(this.props.name, options);
        }
    }

     shouldComponentUpdate(nextProps, nextState) {
        if(this.props.disableUpdate == true) {
            if(this.props.setInitial == true) {
                if(this.props.value == undefined && nextProps.value != undefined) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        } else if(this.props.disableUpdate == false) {
            return true;
        } else if(this.props.updateAlways == true) {
            return true;
        }else {
            return this.props.value != nextProps.value
        }
    }
}
