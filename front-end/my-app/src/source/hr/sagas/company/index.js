import { fork } from 'redux-saga/effects';
import { companyInputChanged, createOrUpdateCompany, editCompany, deleteCompany } from './root';
import { branchInputChanged, createOrUpdateBranch, editBranch, deleteBranch } from './branch';
import { departmentInputChanged, createOrUpdateDepartment, editDepartment, deleteDepartment } from './department';

export default function* root() { 

   yield [
       fork(companyInputChanged),
       fork(createOrUpdateCompany),
       fork(editCompany),
       fork(deleteCompany),
       fork(branchInputChanged),
       fork(createOrUpdateBranch),
       fork(editBranch),
       fork(deleteBranch),
       fork(departmentInputChanged),
       fork(createOrUpdateDepartment),
       fork(editDepartment),
       fork(deleteDepartment)
   ]
}