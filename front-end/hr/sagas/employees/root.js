import { take, call, put, select } from 'redux-saga/effects';
import { List, fromJS } from 'immutable';
import { createConstant } from 'hrConstants/constantCreator';
import actionCreator from '../../actions/actionCreator';
import { request } from 'helpers/request';
import { dispatch } from 'helpers/reduxStore';
import { getBranches } from '../../services/company/branch';
import { bindInputChange, copyObjectToArray, addItemToFormList } from 'utils/sagaInputChange';
import { showServerResponseMessage, showWarningMessage, showValidations } from 'utils/notification';
import { getDepartments } from '../../services/company/department';
import { clearValidationHighlights, formatDate, getAge, showDialog, logMessage } from 'utils';
import validate from 'validate.js';
import Promise from 'bluebird';
import uuid from 'node-uuid';
import moment from 'moment';
import _ from 'lodash';
import { getCountries, getStates, getSalutationList, getGenderList, getEmployeeTypes, getEmployeeCategory, getDesignations, getMaritialStatus, getReligions, getCastes, getPayGrades, getQualifications, getQualificationName, getBloodGroupList, getDocumentTypeList } from '../../services/masterEntries';
import { fork } from 'redux-saga/effects';

const getStateData = (state) => state.hr.employee.root.get("data").toObject();

function* employeeInputChanged() {

    while (true) {

        const { name, value } = yield take(createConstant("EMPLOYEE", "INPUT_CHANGED"));

        try {

            let formData = yield select(getStateData);
            let callbacks = getCallbacks(formData, name, value);

            bindInputChange(callbacks, name, value, false).then((state) => {

                dispatch(actionCreator("EMPLOYEE", "SET_FORM", { 'data': state }));
            });
        }
        catch (e) {

            logMessage(e)
        }
    }
}

function* addQualificationToList() {

    while (true) {

        yield take(createConstant("EMPLOYEE", "ADD_QUALIFICATION_TO_LIST"));

        let formData = yield select(getStateData);

        let data = {
            'QualificationId': formData.QualificationId,
            'QualificationName': getQualificationName(formData.QualificationId, formData.QualificationList.toArray()),
            'Institute': formData.Institute,
            'FromYear': formData.FromYear,
            'ToYear': formData.ToYear,
            'MajorSpecilization': formData.MajorSpecilization,
            'Description': formData.Description,
            //'Id': getNextId(),
            'uId': uuid.v1(),
            'Status': true
        };

        if (validateQuaification()) {

            let qualificationList = formData.EmployeeQualificationList.toArray();
            qualificationList.push(data);

            yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeQualificationList', 'value': List(qualificationList) }));
            yield put(actionCreator("EMPLOYEE", "CLEAR_QUALIFICATION_ENTRY"));

        } else {

            showWarningMessage("Qualification already added to list");
        }

        function getNextId() {

            let next = _.maxBy(formData.EmployeeQualificationList.toArray(), function (o) { return o.Id; });
            return next ? (next.Id + 1) : 1
        }

        function validateQuaification() {

            let qualificationList = formData.EmployeeQualificationList.toArray();
            let exists = _.find(qualificationList, (i) => { return i.QualificationId == formData.QualificationId && i.Status == true });
            return exists ? false : true;
        }
    }
}

function* removeQualification() {

    while (true) {

        const { id } = yield take(createConstant("EMPLOYEE", "REMOVE_QUALIFICATION"));
        let formData = yield select(getStateData);
        let qualificationList = formData.EmployeeQualificationList.toArray();
        let qualification = _.find(qualificationList, (i) => { return i.uId == id });

        if (qualification) {

            qualification.Status = false
        };

        yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeQualificationList', 'value': List(qualificationList) }));
    }
}

function* addExperienceList() {

    while (true) {

        yield take(createConstant("EMPLOYEE", "ADD_EXPERIENCE_TO_LIST"));

        let formData = yield select(getStateData);

        let data = {
            'Firm': formData.Firm,
            'FromYear': formData.ExperienceFromYear,
            'ToYear': formData.ExperienceToYear,
            'Description': formData.Description,
            'ExperienceCertificate': formData.ExperienceCertificate,
            //'Id': getNextId(),
            'uId': uuid.v1(),
            'Status': true
        };

        if (validateExperience()) {

            let expereneceList = formData.EmployeeExperienceList.toArray();
            expereneceList.push(data);

            yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeExperienceList', 'value': List(expereneceList) }));
            yield put(actionCreator("EMPLOYEE", "CLEAR_EXPERIENCE_ENTRY"));

        } else {

            showWarningMessage("Expereience already added to list");
        }

        function getNextId() {

            let next = _.maxBy(formData.EmployeeExperienceList.toArray(), function (o) { return o.Id; });
            return next ? (next.Id + 1) : 1
        }

        function validateExperience() {

            let expereienceList = formData.EmployeeExperienceList.toArray();
            let exists = _.find(expereienceList, (i) => { return i.Status == true && i.Firm == formData.Firm && i.FromYear == formData.ExperienceFromYear && i.ToYear == formData.ExperienceToYear });
            return exists ? false : true;
        }
    }
}

function* removeExperience() {

    while (true) {

        const { id } = yield take(createConstant("EMPLOYEE", "REMOVE_EXPERIENCE"));
        let formData = yield select(getStateData);
        let experienceList = formData.EmployeeExperienceList.toArray();
        let experience = _.find(experienceList, (i) => { return i.uId == id });

        if (experience) {
            experience.Status = false
        };

        yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeExperienceList', 'value': List(experienceList) }));
    }
}

function* addDocumentToList() {

    while (true) {

        yield take(createConstant("EMPLOYEE", "ADD_DOCUMENT_TO_LIST"));

        let formData = yield select(getStateData);


        let data = {
            'DocumentName': formData.DocumentName,
            'DocumentTypeId': formData.DocumentTypeId,
            'File': formData.DocumentFile,
            'uId': getNextId(),
            'Status': true
        };

        if (validate()) {

            let documentList = formData.EmployeeDocumentList.toArray();
            documentList.push(data);

            yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeDocumentList', 'value': List(documentList) }));
            yield put(actionCreator("EMPLOYEE", "CLEAR_DOCUMENTT_ENTRY"));

        } else {

            showWarningMessage("Document already added to list");
        }

        function getNextId() {

            return uuid.v1();
        }

        function validate() {

            let expereienceList = formData.EmployeeDocumentList.toArray();
            let exists = _.find(expereienceList, (i) => { return i.DocumentTypeId == formData.DocumentTypeId && i.Staus == true });
            return exists ? false : true;
        }
    }
}

function* removeDocument() {

    while (true) {

        const { id } = yield take(createConstant("EMPLOYEE", "REMOVE_DOCUMENT"));

        let formData = yield select(getStateData);
        let documentLis = formData.EmployeeDocumentList.toArray();
        let document = _.find(documentLis, (i) => { return i.uId == id });

        if (document) {
            document.Status = false;
        }
        yield put(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'EmployeeDocumentList', 'value': List(documentLis) }));
    }
}

function* saveEmployee() {

    while (true) {

        yield take(createConstant("EMPLOYEE", "SAVE_EMPLOYEE_ROOT"));

        let formData = yield select(getStateData);

        if (validateTab(formData)) {

            let data = getDataByTabWise(formData);
            let requestUri = getEmployeeSaveRoute(formData.currentTab);

            let response = yield call(request, requestUri, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    'enctype': "multipart/form-data"
                }
            });

            if (response.completed && response.data.success) {

                processResponse(formData, response);
                showServerResponseMessage(response);

            } else {

                logMessage({ 'message': 'Employee save failed', data, 'success': false });
                showWarningMessage();
            }
        }
    }
}

export default function* root() {

    yield [
        fork(employeeInputChanged),
        fork(addQualificationToList),
        fork(removeQualification),
        fork(addExperienceList),
        fork(removeExperience),
        fork(addDocumentToList),
        fork(removeDocument),
        fork(saveEmployee)
    ]
}


function processResponse(formData, response) {

    let state = {};

    switch (formData.currentTab) {

        case 1:
            if (!formData.EmployeeId) {

                state.EmployeeId = response.data.payload.Id;
                state.EmployeeCode = response.data.payload.EmployeeCode;
            }
            break;

        case 2:
            if (!formData.EmployeeContactId) {

                state.EmployeeContactId = response.data.payload.Id;
            }
            break;

        case 3:
            if (!formData.EmployeeOfficialId) {

                state.EmployeeOfficialId = response.data.payload.Id;
            }
            break;
        case 4:

            state.EmployeeQualificationList = List(response.data.payload.EmployeeQualificationList);
            state.EmployeeExperienceList = List(response.data.payload.EmployeeExperienceList);

        case 5:

            state.EmployeeAdditionalInfoId = response.data.payload.EmployeeAdditionalInfoId;
            state.EmployeeDocumentList = List(response.data.payload.EmployeeDocumentList);
            state.EmployeeGalleryList = List(response.data.payload.EmployeeGalleryList);
            state.EmployeeBankList = List(response.data.payload.EmployeeBankList);

        default:
            break;
    }

    if (formData.currentTab <= 4) {
        dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': "TabChange", 'value': { 'next': true } }));
    }

    dispatch(actionCreator("EMPLOYEE", "SET_FORM", { 'data': state }));
}

function getCallbacks(formData, name, value) {

    switch (name) {

        case 'init':

            return getTabInitalValues(formData, 1);
        case 'TabChange':

            return [() => {

                return new Promise((resolve, reject) => {

                    let nextTab = getNextTab(formData, value);
                    dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'NextTab', 'value': nextTab }));
                    resolve({ 'currentTab': nextTab });
                });
            }]
        case 'NextTab':

            return getTabInitalValues(formData, value);
        case 'CountryId':

            return [getStates(value, true)]
        case 'ReligionId':

            return [getCastes(value)]

        default:
            return []
    }
}

function getNextTab(formData, tabChangeValue) {

    let nextTab = (tabChangeValue.next == true) ? (formData.currentTab + 1) : formData.currentTab - 1;

    if (nextTab != 0 && nextTab != 6) {

        return nextTab;

    } else {

        return 0;
    }
}

function getTabInitalValues(formData, nextTab) {

    switch (nextTab) {

        case 1:

            return getBasicTabValues(formData);
        case 2:

            return getContactTabValues(formData);
        case 3:

            return getOfficialInfoTabValues(formData);
        case 4:

            return getQualificationAndExpeirenceValues(formData);
        case 5:

            return getAdditionalInfoTabValues(formData);
        default:

            return [];
    }
}

function getBasicTabValues(formData) {

    let basicInfoTabs = [];

    if (formData.SalutationList.toArray().length == 0) {

        basicInfoTabs.push(getSalutationList());
    }

    if (formData.GenderList.toArray().length == 0) {

        basicInfoTabs.push(getGenderList());
    }

    if (formData.EmployeeTypeList.toArray().length == 0) {

        basicInfoTabs.push(getEmployeeTypes(true));
    }

    if (formData.EmployeeCategoryList.toArray().length == 0) {

        basicInfoTabs.push(getEmployeeCategory(true));
    }

    if (formData.MaritialStatusList.toArray().length == 0) {

        basicInfoTabs.push(getMaritialStatus());
    }

    if (formData.ReligionList.toArray().length == 0) {

        basicInfoTabs.push(getReligions());
    }

    return basicInfoTabs;
}

function getContactTabValues(formData) {

    let basicInfoTabs = [];

    if (formData.CountryList.toArray().length == 0) {

        basicInfoTabs.push(getCountries(true));
    }

    return basicInfoTabs;
}

function getOfficialInfoTabValues(formData) {

    let basicInfoTabs = [];

    if (formData.DepartmentList.toArray().length == 0) {

        basicInfoTabs.push(getDepartments(true));
    }

    if (formData.GradeList.toArray().length == 0) {

        basicInfoTabs.push(getPayGrades());
    }

    if (formData.DesignationList.toArray().length == 0) {

        basicInfoTabs.push(getDesignations(true));
    }

    return basicInfoTabs;
}

function getQualificationAndExpeirenceValues(formData) {

    let basicInfoTabs = [];

    if (formData.QualificationList.toArray().length == 0) {

        basicInfoTabs.push(getQualifications(true));
    }

    return basicInfoTabs;
}

function getAdditionalInfoTabValues(formData) {

    let basicInfoTabs = [];

    if (formData.BloodGroupList.toArray().length == 0) {

        basicInfoTabs.push(getBloodGroupList());
    }

    if (formData.DocumentTypeList.toArray().length == 0) {

        basicInfoTabs.push(getDocumentTypeList());
    }

    return basicInfoTabs;
}

function getEmployeeSaveRoute(currentTab) {

    switch (currentTab) {

        case 1:
            return "hr/employee/basicInfo";

        case 2:
            return "hr/employee/contactInfo";

        case 3:
            return "hr/employee/officialInfo";

        case 4:
            return "hr/employee/qualificationAndExpereience";

        case 5:
            return "hr/employee/additionalInfo";
    }
}

function goToTab(tab) {

    dispatch(actionCreator("EMPLOYEE", "INPUT_CHANGED", { 'name': 'currentTab', 'value': tab }))
}

function validateTab(formData) {

    if (!formData.EmployeeId && formData.currentTab > 1) {

        goToTab(1);
        showWarningMessage("Fill the basic employee details first");
        return false;
    }

    let constraints = getConstrains(formData);
    let data = getDataByTabWise(formData);
    let validations = validate(data, constraints);

    if (!validations) {

        clearValidationHighlights();
        return true;

    } else {

        showValidations("Fix the following errors to continue !", validations);
    }

    return false;
}

function getConstrains(formData) {

    switch (formData.currentTab) {

        case 1:

            return getBasicTabConstraints();

        case 2:

            return getContactInfoConstraints();

        case 3:

            return getOfficialInfoConstratins();

        default:
            return {}
    }

}

function getDataByTabWise(formData) {

    switch (formData.currentTab) {

        case 1:

            return getBasicInformation(formData);

        case 2:

            return getContactInformation(formData);

        case 3:

            return getOffiialInformation(formData);

        case 4:

            return getQualificationAndExperience(formData);

        case 5:

            return getAdditionalInformation(formData);
    }
}

function getBasicInformation(formData) {

    return {
        'SalutationId': formData.SalutationId,
        'Firstname': formData.Firstname,
        'Middlename': formData.Middlename,
        'Lastname': formData.Lastname,
        'GenderId': formData.GenderId,
        'EmployeeTypeId': formData.EmployeeTypeId,
        'EmployeeCategoryId': formData.EmployeeCategoryId,
        'MaritialStatusId': formData.MaritialStatusId,
        'ReligionId': formData.ReligionId,
        'CasteId': formData.CasteId,
        'DateOfBirth': formatDate(formData.DateOfBirth),
        'ReportsTo': formData.ReportsTo,
        'EmployeeId': formData.EmployeeId ? formData.EmployeeId : 0
    }
}

function getContactInformation(formData) {

    return {
        'Email': formData.Email,
        'Phone1': formData.Phone1,
        'Phone2': formData.Phone2,
        'NationalityId': formData.NationalityId,
        'CountryId': formData.CountryId,
        'StateId': formData.StateId,
        'City': formData.City,
        'Place': formData.Place,
        'Landmark': formData.Landmark,
        'Pincode': formData.Pincode,
        'CurrentAddress': formData.CurrentAddress,
        'PermenantAddress': formData.PermenantAddress,
        'EmployeeId': formData.EmployeeId ? formData.EmployeeId : 0,
        'EmployeeContactId': formData.EmployeeContactId
    }
}

function getOffiialInformation(formData) {

    return {
        'DepartmentId': formData.DepartmentId,
        'JoiningDate': formatDate(formData.JoiningDate),
        'ServiceStartDate': formatDate(formData.ServiceStartDate),
        'Grade': formData.Grade,
        'DesignationId': formData.DesignationId,
        'EmployeeId': formData.EmployeeId ? formData.EmployeeId : 0,
        'EmployeeOfficialId': formData.EmployeeOfficialId
    }
}

function getQualificationAndExperience(formData) {

    return {
        'EmployeeExperienceList': formData.EmployeeExperienceList.toArray(),
        'EmployeeQualificationList': formData.EmployeeQualificationList.toArray(),
        'EmployeeId': formData.EmployeeId ? formData.EmployeeId : 0
    }
}

function getAdditionalInformation(formData) {

    return {
        'BloodGroupId': formData.BloodGroupId,
        'Ssn': formData.Ssn,
        'TaxNumber': formData.TaxNumber,
        'PassportNumber': formData.PassportNumber,
        'PassportExpiaryDate': formData.PassportExpiaryDate,
        'DrivingLicence': formData.DrivingLicence,
        'Esi': formData.Esi,
        'PanCard': formData.PanCard,
        'PfNumber': formData.PfNumber,
        'AvoidPfContribution': formData.AvoidPfContribution,
        'HolidayWageEligibility': formData.HolidayWageEligibility,
        'LwfEligibility': formData.LwfEligibility,
        'EmployeeDocumentList': formData.EmployeeDocumentList.toArray(),
        'EmployeeGalleryList': formData.EmployeeGalleryList.toArray(),
        'EmployeeBankList': formData.EmployeeBankList.toArray(),
        'EmployeeId': formData.EmployeeId ? formData.EmployeeId : 0,
        'EmployeeAdditionalInfoId': formData.EmployeeAdditionalInfoId
    }
}

function getBasicTabConstraints() {

    return {
        'SalutationId': { 'presence': true },
        'Firstname': { 'presence': true },
        'Lastname': { 'presence': true },
        'GenderId': { 'presence': true },
        'EmployeeTypeId': { 'presence': true },
        'EmployeeCategoryId': { 'presence': true },
        'MaritialStatusId': { 'presence': true },
        'ReligionId': { 'presence': true },
        'CasteId': { 'presence': true },
        'DateOfBirth': {
            'presence': true,
        }
    }
}

function getContactInfoConstraints() {

    return {
        'Email': { 'presence': true, 'email': true },
        'Phone1': { 'presence': true },
        'NationalityId': { 'presence': true },
        'CountryId': { 'presence': true },
        'StateId': { 'presence': true },
        'CurrentAddress': { 'presence': true },
        'PermenantAddress': { 'presence': true },
        'Pincode': { 'presence': true }
    }
}

function getOfficialInfoConstratins() {

    return {
        'DepartmentId': { 'presence': true },
        'JoiningDate': { 'presence': true },
        'ServiceStartDate': { 'presence': true },
        'Grade': { 'presence': true },
        'DesignationId': { 'presence': true }
    }
}