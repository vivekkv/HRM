export function createConstant(moduleName, type, action) {

    return "ERP_HR_" + moduleName + "_" + type + "_" + action;
}

export default createConstant;