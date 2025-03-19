import TaskForm from './components/TaskForm';
import Countdown from './components/Countdown';

import { MainContanier } from './styles';
import { Play, Hand } from "@phosphor-icons/react";

import { useState, createContext } from 'react';

import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';


const onSubmitFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Favor informe a tarefa'),
    timer: zod.number().min(5).max(60)
})

type SubmitFormData = zod.infer<typeof onSubmitFormValidationSchema>

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
    finishedCycle: () => void,
    updatingSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export default function Home() {
    const [cycle, setCycle] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>('')
    const [secondsTake, setSecondsTake] = useState(0)

    const newCycleForm = useForm({
        resolver: zodResolver(onSubmitFormValidationSchema),
        defaultValues: {
            task: '',
            timer: 0
        }
    });

    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')
    const timer = watch('timer')
    const isSubmitDisabled = (!timer || !task)

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
    }

    const updatingSecondsPassed = (seconds: number) => {
        setSecondsTake(seconds)
    }

    const onSubmit = (data: SubmitFormData) => {
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

    const handleReset = () => {
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
        reset()
    }

    return (
        <MainContanier>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CyclesContext.Provider value={
                    {
                        activeCycle,
                        activeCycleId,
                        finishedCycle,
                        secondsTake,
                        updatingSecondsPassed
                    }
                }>
                    <FormProvider {...newCycleForm}>
                        <TaskForm />
                    </FormProvider>
                    <Countdown />
                </CyclesContext.Provider>
                {!activeCycle ? (
                    <button type='submit' disabled={isSubmitDisabled}><Play size={30} />Começar</button>
                ) : (
                    <button type='reset' onClick={handleReset}><Hand size={30} />Interromper</button>
                )}
            </form>
        </MainContanier>
    )
}