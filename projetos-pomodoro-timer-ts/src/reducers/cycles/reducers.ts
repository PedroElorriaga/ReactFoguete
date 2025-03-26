import { produce } from "immer"
import { ActionTypes } from "./actions"

export interface Cycle {
    id: string,
    task: string,
    timer: number,
    startDate: Date,
    stopedDate?: Date,
    finishedDate?: Date
}

interface CycleState {
    cycle: Cycle[],
    activeCycleId: string | null
}

export function cyclesReducer(state: CycleState, action: any) {
    switch (action.type) {
        case ActionTypes.createNewCycle:
            return produce(state, (draft) => {
                draft.cycle.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })

        case ActionTypes.resetCycle: {
            const currentCycleIndex = state.cycle.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycle[currentCycleIndex].stopedDate = new Date()
            })

        }

        case ActionTypes.finishedCycle: {
            const currentCycleIndex = state.cycle.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycle[currentCycleIndex].finishedDate = new Date()
            })
        }

        default:
            return state
    }

}