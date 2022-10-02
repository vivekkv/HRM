import Promise from 'bluebird';
import { showLoader, hideLoader } from './';
import _ from 'lodash';

export function bindInputChange(callbacks, name, value, showLoader) {

    return new Promise((resolve, reject) => {

        let newState = [];
        if (typeof name == "object") {

            for (var i in name) {

                
                newState.push({
                    'name': i,
                    'value': name[i]
                })
            }

            resolve(newState);
        } else {

            if (callbacks && callbacks.length > 0) {

                let callbackLength = callbacks.length;
                let iterator = 0;

                if (showLoader != false)
                    showLoader();

                Promise.each(callbacks, function (promise) {
                    promise().then((data) => {

                        for (const item in data) {

                            newState.push({
                                'name': item,
                                'value': data[item]
                            });
                        }

                        iterator++;

                        if (iterator == callbackLength) {

                            newState.push({ 'name': name, 'value': value });

                            resolve(newState);
                        }
                    });

                    if (showLoader != false)
                        hideLoader();
                });

            } else {

                newState.push({ 'name': name, 'value': value });
                resolve(newState);
            }
        }
    })
}

export function copyObjectToArray(object) {

    let items = [];

    for(let i in object) {

        items.push({
            'name': i,
            'value': object[i]
        });
    }

    return items;
}

export function addItemToFormList(item, formList, isNewItem) {
    
    if (!isNewItem) {

        let existingItem = _.find(formList, (i) => { return i.Id == item.Id });
        _.extend(existingItem, item);

    } else {

        formList.push(item)
    }

    return formList;
}