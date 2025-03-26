import { Cycle } from "./reducers"

export enum ActionTypes {
    createNewCycle = 'createNewCycle',
    resetCycle = 'resetCycle',
    finishedCycle = 'finishedCycle'
} // Isso é feito para que quando é necessario alterar ou adicionar um, seja mais fácil de localizar


export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.createNewCycle,
        payload: {
            newCycle
        }
    }
}

export function setFinishedCycleAction() {
    return {
        type: ActionTypes.finishedCycle,
    }
}

export function resetCycleAction() {
    return {
        type: ActionTypes.resetCycle,
    }
}