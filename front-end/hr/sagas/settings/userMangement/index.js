import { fork } from 'redux-saga/effects';
import { accessControlInputChanged, getAccessControlList, accessControlChanged, updateAccessControl, treeNodeSelected } from './accessControl';
import { userMangementRootInputChanged } from './root';
import { rolesInputChanged, createRole, editRole, deleteRole } from './role';

export default function* root() { 

   yield [
       fork(accessControlInputChanged),
       fork(getAccessControlList),
       fork(accessControlChanged),
       fork(updateAccessControl),
       fork(treeNodeSelected),
       fork(userMangementRootInputChanged),
       fork(rolesInputChanged),
       fork(createRole),
       fork(editRole),
       fork(deleteRole)
   ]
}   