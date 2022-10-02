import createConstant from 'hrConstants/constantCreator';

export default function actionCreator(moduleName, actionName, payLoad) {

    return {
        type: createConstant(moduleName, actionName),
        ...payLoad
    }
}