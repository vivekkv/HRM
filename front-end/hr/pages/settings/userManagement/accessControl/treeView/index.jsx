import React from 'react';
import _ from 'lodash';
import uuid from 'node-uuid';
import { accessControlChanged, treeNodeSelected } from '../../../../../actions/settings/userManagement/accessControl';
import Styles from './styles.css';

export default class TreeView extends React.Component {

    render() {
        return (<div>
            <div className="css-treeview">
                {
                    this.props.data.AuthorizeRoleId ? <ul>
                        <li><input type="checkbox" id="d81b61e0-15d5-11e7-949c-f3a29fdaf628" defaultChecked={true} />
                            <label htmlFor="d81b61e0-15d5-11e7-949c-f3a29fdaf628"><span className={Styles.allChecked}></span>Menu</label>
                            <ul>
                                {
                                    this.getTreeViewData().map((node) => {

                                        return (this.parseChildNode(node))
                                    })
                                }
                            </ul>
                        </li>
                    </ul> : null
                }
            </div>
        </div>)
    }

    parseChildNode(item) {

        if (item.Childrens && item.Childrens.length > 0) {

            let allChecked = false;
            return <li key={uuid.v1()}><input type="checkbox" defaultChecked={this.checkDefaultChecked(item.uId)} id={item.uId} data-uid={item.uId} onClick={this.addToSelectedNodes.bind(this)} />
                <label htmlFor={item.uId}> {<span className={this.checkAllChildrensAreAllowed(item) ?  Styles.allChecked :Styles.partialChecked} ></span>} {item.Name} </label>
                {
                    <ul>
                        {
                            item.Childrens.map((children) => {
                                return this.parseChildNode(children);
                            })
                        }
                    </ul>
                }
            </li>
        }   
        else {
            return <li key={uuid.v1()} className={Styles.pageItem}> <a> {<i className={["fa", this.checkIsMenuAuthroized(item.Id) ? "fa-check-square-o" : "fa-close"].join(" ")} aria-hidden="true"></i>} <span data-resourceOperationId={item.Id} onClick={this.onAccessControlChange.bind(this)}>{item.Name}</span></a></li>
        }
    }

    checkAllChildrensAreAllowed(item) {

        let allChecked = true;

        for(let i=0; i<item.Childrens.length; i++) {

            if(!this.checkIsMenuAuthroized(item.Childrens[i].Id)) {
                allChecked = false;
                return allChecked;
                break;
            }

            if(item.Childrens[i].Childrens) {

                let checked = this.checkAllChildrensAreAllowed(item.Childrens[i]);
                if(checked == false) {
                    allChecked = false;
                    break;
                }

            }
        }
        return allChecked;
    }

    checkDefaultChecked(id) {

        let checkedNodes = this.props.data.TreeViewOpenNodes.toArray();
        return checkedNodes.indexOf(id) >= 0;
    }

    onAccessControlChange(e) {

        let checked = false;
        if (e.target.parentNode.children[0].className == "fa fa-check-square-o") {

            e.target.parentNode.children[0].removeAttribute("class")
            e.target.parentNode.children[0].setAttribute("class", "fa fa-close")
            checked = false;
        } else {

            e.target.parentNode.children[0].removeAttribute("class")
            e.target.parentNode.children[0].setAttribute("class", "fa fa-check-square-o")
            checked = true;
        }

        let resourceOperationId = e.target.getAttribute("data-resourceOperationId");
        this.props.dispatch(accessControlChanged(resourceOperationId, checked));
    }

    addToSelectedNodes(e) {

        let resourceId = e.target.getAttribute("data-uid");
        this.props.dispatch(treeNodeSelected(resourceId));
    }

    getTreeViewData() {

        let accessControlList = this.props.data.AccessControlList.toObject();
        if (accessControlList.Resources.toArray().length > 0) {

            let resources = accessControlList.Resources.toArray();
            let resourceOperations = accessControlList.ResourceOperations.toArray();
            let topParentResources = this.getResourcesHierachy(resources, resourceOperations);

            return topParentResources;
        }
        return [];
    }

    getResourcesHierachy(resources, resourceOperations) {

        let parentResources = [];

        for (let i = 0; i < resources.length; i++) {

            let item = resources[i];
            let parentChild = {
                'Id': item.Id,
                'Name': item.ResourceName,
                'Childrens': this.getResourceChildrens(item.Id, resources, resourceOperations),
                'uId': "TreeNode" + item.Id,
            };

            parentResources.push(parentChild)

            this.getResourceOperationChildrens(item.Id, resourceOperations).forEach((i) => {
                parentChild.Childrens.push(i);
            });

            _.remove(resources, (j) => { return j.Id == item.Id });
            i--;
        }

        return parentResources;
    }

    getResourceChildrens(parentId, resources, resourceOperations) {

        let childrens = [];

        for (var i = 0; i < resources.length; i++) {

            if (resources[i].ParentResourceId == parentId) {

                let item = {
                    'Id': resources[i].Id,
                    'Name': resources[i].ResourceName,
                    'Childrens': this.getResourceChildrens(resources[i].Id, resources),
                    'uId': "TreeNode" + resources[i].Id,
                }

                childrens.push(item)

                this.getResourceOperationChildrens(resources[i].Id, resourceOperations).forEach((i) => {

                    item.Childrens.push(i);
                });

                _.remove(resources, (j) => { return j.Id == resources[i].Id });
                i--;
            }
        }

        return childrens;
    }

    getResourceOperationChildrens(resourceId, resourceOperations) {

        let resouceOperations = [];

        resourceOperations.forEach((i) => {

            if (i.ResourceId == resourceId) {

                resouceOperations.push({
                    'Id': i.Id,
                    'ResourceId': i.ResourceId,
                    'Name': i.Name,
                    'uId': "TreeNode" + i.Id,
                })
            }
        });
        return resouceOperations;
    }

    checkIsMenuAuthroized(resourceId) {

        var resourceOperation = _.find(this.props.data.RoleAccessControlList.toArray(), (j) => { return j.ResourceOperationId == Number(resourceId) });
        if (resourceOperation && resourceOperation.checked != false)
        {
            return true;
        } else {

            let isInChangedList = _.find(this.props.data.AccessControlChangeList.toArray(), (i) => { return i.resourceId == Number(resourceId) });
            if(isInChangedList)
                return true
        }
        return false;
    }

}