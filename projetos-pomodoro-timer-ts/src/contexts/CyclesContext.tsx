import { createContext, useState, ReactNode } from "react"


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

export function CyclesContextProvider({ children }: CycleProviderChildrenProps) {
    const [cycle, setCycle] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>('')
    const [secondsTake, setSecondsTake] = useState(0)

    const activeCycle = cycle.find(data => data.id === activeCycleId)

    const finishedCycle = () => {
        setCycle(state =>
            state.map(data => {
                if (data.id === activeCycleId) {
                    return { ...data, finishedDate: new Date() }
                } else {
                    return data
                }
            })
        )

        setActiveCycleId(null)
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

        setActiveCycleId(newCycle.id)
        setCycle((state) => [...state, newCycle]) // Closure do react por isso usei (state)
        setSecondsTake(0)
    }

    const resetCycle = () => {
        setCycle(state =>
            state.map((data) => {
                if (data.id === activeCycleId) {
                    return { ...data, stopedDate: new Date() }
                } else {
                    return data
                }
            })
        )
        setActiveCycleId(null)
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