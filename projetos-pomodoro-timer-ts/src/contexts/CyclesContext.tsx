import { createContext, useState, ReactNode, useReducer, useEffect } from "react"
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
    task: string,
    timer: number
}

interface Cycle {
    id: string,
    task: string,
    timer: number,
    startDate: Date,
    stopedDate?: Date,
    finishedDate?: Date
}

interface CyclesContextType {
    activeCycle: Cycle | undefined,
    activeCycleId: string | null,
    secondsTake: number,
    cycle: Cycle[]
    finishedCycle: () => void,
    updatingSecondsPassed: (seconds: number) => void,
    createNewCycle: (data: CreateCycleData) => void,
    resetCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CycleProviderChildrenProps {
    children: ReactNode
}

interface CycleState {
    cycle: Cycle[],
    activeCycleId: string | null
}

export function CyclesContextProvider({ children }: CycleProviderChildrenProps) {
    const [cycles, dispacth] = useReducer((state: CycleState, action: any) => {
        switch (action.type) {
            case 'createNewCycle':
                return {
                    ...state,
                    cycle: [...state.cycle, action.payload.newCycle],
                    activeCycleId: action.payload.newCycle.id
                }

            case 'resetCycle':
                return {
                    ...state,
                    cycle: state.cycle.map((data) => {
                        if (data.id === state.activeCycleId) {
                            return { ...data, stopedDate: new Date() }
                        } else {
                            return data
                        }
                    }),
                    activeCycleId: null
                }

            case 'finishedCycle':
                return {
                    ...state,
                    cycle: state.cycle.map(data => {
                        if (data.id === state.activeCycleId) {
                            return { ...data, finishedDate: new Date() }
                        } else {
                            return data
                        }
                    }),
                    activeCycleId: null
                }

            default:
                return state
        }

    }, {
        cycle: [],
        activeCycleId: null
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem(
            'projeto-pomodoro:cycles'
        )

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const { cycle, activeCycleId } = cycles
    const activeCycle = cycle.find(data => data.id === activeCycleId)

    const [secondsTake, setSecondsTake] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cycles)

        localStorage.setItem('projeto-pomodoro:cycles', stateJSON)
    }, [cycles])

    const finishedCycle = () => {
        dispacth({
            type: 'finishedCycle',
            payload: {
                activeCycleId
            }
        })
        setSecondsTake(0)
    }

    const updatingSecondsPassed = (seconds: number) => {
        setSecondsTake(seconds)
    }

    const createNewCycle = (data: CreateCycleData) => {
        const newCycle: Cycle = {
            id: String(new Date().getMilliseconds()),
            task: data.task,
            timer: data.timer,
            startDate: new Date()
        }

        dispacth({
            type: 'createNewCycle',
            payload: {
                newCycle
            }
        })
        setSecondsTake(0)
    }

    const resetCycle = () => {
        dispacth({
            type: 'resetCycle',
            payload: {
                activeCycleId
            }
        })
        setSecondsTake(0)
    }


    return (
        <CyclesContext.Provider value={
            {
                activeCycle,
                activeCycleId,
                finishedCycle,
                secondsTake,
                updatingSecondsPassed,
                createNewCycle,
                resetCycle,
                cycle
            }
        }>
            {children}
        </CyclesContext.Provider>
    )
}