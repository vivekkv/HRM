import Promise from 'bluebird';
import { request } from 'helpers/request';
import { List } from 'immutable';
import _ from 'lodash';

export function getCountries(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getCountries", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "CountryList": List(list) });
            });
        });
    }
}

export function getStates(countryId, isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getStates?countryId=" + countryId, {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "StateList": List(list) });
            });
        });
    }
}

export function getCompanyTypes(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getCompanyTypes", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "CompanyTypeList": List(list) });
            });
        });
    }
}

export function getBranchTypes(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getBranchTypes", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "BranchTypeList": List(list) });
            });
        });
    }
}

export function getTimezones(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getTimezones", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "TimeZoneList": List(list) });
            });
        });
    }
}

export function getCurrencies(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getCurrencies", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "CurrencyList": List(list) });
            });
        });
    }
}

export function getSalutationList() {

    return () => {

        return new Promise((resolve, reject) => {

            const list = [{
                'label': 'Mr.',
                'value': 1
            }, {
                'label': 'Miss.',
                'value': 2
            }, {
                'label': 'Mrs.',
                'value': 3
            }, {
                'label': 'Ms.',
                'value': 4
            }, {
                'label': 'Dr.',
                'value': 5
            }]

            resolve({ 'SalutationList': List(list) })
        });
    }
}

export function getEmployeeTypes(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getEmployeeTypes", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "EmployeeTypeList": List(list) });
            });
        });
    }
}

export function getEmployeeCategory(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {
            request("hr/masterEntries/getEmployeeCategories", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "EmployeeCategoryList": List(list) });
            });
        });
    }
}

export function getDesignations(isDropdownComponent) {

    return () => {

        return new Promise((resolve, reject) => {
            request("hr/masterEntries/getDesignations", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    if (isDropdownComponent) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });

                    } else {

                        list = response.data.payload;
                    }
                }

                resolve({ "DesignationList": List(list) });
            });
        });
    }
}

export function getReligions() {

    return () => {

        return new Promise((resolve, reject) => {
            request("hr/masterEntries/getReligions", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    response.data.payload.forEach((i) => {

                        list.push({ 'label': i.Name, 'value': i.Id })
                    });
                }

                resolve({ "ReligionList": List(list) });
            });
        });
    }
}

export function getCastes(religionId) {

    return () => {

        return new Promise((resolve, reject) => {

            if (!religionId) {

                resolve(List([]));
            } else {

                request("hr/masterEntries/getCastes?religionId=" + religionId, {
                    method: "GET"
                }).then((response) => {

                    let list = [];

                    if (response.completed && response.data.success) {

                        response.data.payload.forEach((i) => {

                            list.push({ 'label': i.Name, 'value': i.Id })
                        });
                    }

                    resolve({ "CasteList": List(list) });
                });
            }
        });
    }
}

export function getQualifications(religionId) {

    return () => {

        return new Promise((resolve, reject) => {

            request("hr/masterEntries/getQualifications", {
                method: "GET"
            }).then((response) => {

                let list = [];

                if (response.completed && response.data.success) {

                    response.data.payload.forEach((i) => {

                        list.push({ 'label': i.Name, 'value': i.Id })
                    });
                }

                resolve({ "QualificationList": List(list) });
            });
        });
    }
}

export function getGenderList() {

    return () => {

        return new Promise((resolve, reject) => {

            resolve({
                'GenderList': List([{
                    'label': "Male",
                    'value': 1
                }, {
                    'label': "Female",
                    'value': 2
                }])
            })
        })
    }
}

export function getMaritialStatus() {

    return () => {

        return new Promise((resolve, reject) => {

            resolve({
                'MaritialStatusList': List([{
                    'label': "Single",
                    'value': 1
                }, {
                    'label': "Married",
                    'value': 2
                }, {
                    'label': "Divorced",
                    'value': 3
                }, {
                    'label': "Seperated",
                    'value': 4
                }, {
                    'label': "Widowed",
                    'value': 5
                }, {
                    'label': "In a relationship",
                    'value': 6
                }, {
                    'label': "Engaged",
                    'value': 7
                }])
            })
        })
    }
}

export function getPayGrades() {

    return () => {

        return new Promise((resolve, reject) => {

            resolve({
                'GradeList': List([{
                    'label': "1",
                    'value': 1
                }, {
                    'label': "A",
                    'value': 2
                }, {
                    'label': "SPS",
                    'value': 3
                }])
            })
        })
    }
}

export function getQualificationName(qualificationId, qualificationList) {

    let qualification = _.find(qualificationList, (i) => { return i.value == qualificationId });
    return qualification ? qualification.label : "";
}

export function getBloodGroupList() {

    return () => {

        return new Promise((resolve, reject) => {

            let list = [{
                'label': "A+",
                "value": 1,
            }, {
                'label': "A-",
                "value": 2,
            }, {
                'label': "B+",
                "value": 3,
            }, {
                'label': "B-",
                "value": 4,
            }, {
                'label': "O+",
                "value": 5,
            }, {
                'label': "O-",
                "value": 6,
            }, {
                'label': "AB+",
                "value": 7,
            }, {
                'label': "AB-",
                "value": 7,
            }];
            
            resolve({ 'BloodGroupList': List(list) });
        });
    }
}


export function getDocumentTypeList() {

    return () => {

        return new Promise((resolve, reject) => {

            let list = [{
                'label': "Resume",
                "value": 1,
            }, {
                'label': "Pancard",
                "value": 2,
            }, {
                'label': "Passport",
                "value": 3,
            }, {
                'label': "Driving Licence",
                "value": 4,
            }, {
                'label': "Salary Statement",
                "value": 5,
            }, {
                'label': "Qualification",
                "value": 6,
            }, {
                'label': "Other",
                "value": 7,
            }];
            
            resolve({ 'DocumentTypeList': List(list) });
        });
    }
}
