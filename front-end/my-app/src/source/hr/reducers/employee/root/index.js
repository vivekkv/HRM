import { fromJS, List } from 'immutable';
import constantCreator from 'hrConstants/constantCreator';
import { buildNewState } from 'utils/reducer';
import moment  from 'moment';

var initialState = fromJS({
    'data': {
        'DepartmentList': List([]),
        'EmployeeTypeList': List([]),
        'EmployeeCategoryList': List([]),
        'BranchList': List([]),
        'DepartmentList': List([]),
        'DesignationList': List([]),
        'GradeList': List([]),
        'WorkShiftList': List([]),
        'ReportsToList': List([]),
        'GenderList': List([]),
        'CountryList': List([]),
        'MaritialStatusList': List([]),
        'SalutationList': List([]),
        'StateList': List([]),
        'ReligionList': List([]),
        'CasteList': List([]),
        'BloodGroupList': List([]),
        'QualificationList': List([]),
        'EmployeeQualificationList': List([]),
        'EmployeeExperienceList': List([]),
        'EmployeeDocumentList': List([]),
        'EmployeeGalleryList': List([]),
        'EmployeeBankList': List([]),
        'DocumentTypeList': List([]),
        'currentTab': 1,





        "SalutationId":1,"Firstname":"123","Middlename":"1231","Lastname":"31","GenderId":1,"EmployeeTypeId":18,"EmployeeCategoryId":21,"MaritialStatusId":2,"ReligionId":25,"CasteId":27,"DateOfBirth": moment(new Date()),
        "Email":"vivekkv2120Q@g.com","Phone1":"123","Phone2":"123","NationalityId":1,"CountryId":1,"StateId":1,"City":"123","Place":"123","Landmark":"123","Pincode":"1231","CurrentAddress":"3123","PermenantAddress":"12313",
        "DepartmentId":1,"JoiningDate":moment(new Date()),"ServiceStartDate":moment(new Date()),"Grade":1,"DesignationId":1,
    }
});

export default function employeeRootReducer(state = initialState, action) {

    const CHANGE_TAB = constantCreator("EMPLOYEE", "CHANGE_TAB");
    const SET_FORM = constantCreator("EMPLOYEE", "SET_FORM");
    const CLEAR_QUALIFICATIONS = constantCreator("EMPLOYEE", "CLEAR_QUALIFICATION_ENTRY");
    const CLEAR_EXPERIENCE = constantCreator("EMPLOYEE", "CLEAR_EXPERIENCE_ENTRY");
    const CLEAR_DOCUMENTT_ENTRY = constantCreator("EMPLOYEE", "CLEAR_DOCUMENTT_ENTRY");

    switch (action.type) {

        case CHANGE_TAB:

            let nextTab = (action.next == true) ? (state.get("data").get("currentTab") + 1) : state.get("data").get("currentTab") - 1;

            if (nextTab != 0 && nextTab != 6) {

                return state.set("data", state.get("data").set("currentTab", nextTab));
            }

            return state;

        case SET_FORM:

            return state.set("data", buildNewState(state.get('data'), action.data));

        case CLEAR_QUALIFICATIONS:

            return state.set("data", state.get("data")
                .set("QualificationId", null)
                .set("Institute", null)
                .set("FromYear", null)
                .set("ToYear", null)
                .set("MajorSpecilization", null)
                .set("QualificationId", null)
                .set("Description", null));

        case CLEAR_EXPERIENCE:

            return state.set("data", state.get("data")
                .set("Firm", null)
                .set("ExperienceFromYear", null)
                .set("ExperienceToYear", null)
                .set("Description", null)
                .set("ExperienceCertificate", ""));

        case CLEAR_DOCUMENTT_ENTRY:

            return state.set("data", state.get("data")
                .set("DocumentName", null)
                .set("DocumentTypeId", null)
                .set("DocumentFile", ""));

        default:
            return state;
    }
}