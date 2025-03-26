import { createContext, useState, ReactNode, useReducer, useEffect } from "react"
import { differenceInSeconds } from 'date-fns'
import { Cycle, cyclesReducer } from "../reducers/cycles/reducers"
import { addNewCycleAction, resetCycleAction, setFinishedCycleAction } from "../reducers/cycles/actions"
interface CreateCycleData {
    task: string,
    timer: number
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

export function CyclesContextProvider({ children }: CycleProviderChildrenProps) {
    const [cycles, dispacth] = useReducer(cyclesReducer, {
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
        dispacth(setFinishedCycleAction())
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

        dispacth(addNewCycleAction(newCycle))
        setSecondsTake(0)
    }

    const resetCycle = () => {
        dispacth(resetCycleAction())
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