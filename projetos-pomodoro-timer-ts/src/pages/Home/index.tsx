import TaskForm from './components/TaskForm';
import Countdown from './components/Countdown';

import { MainContanier } from './styles';
import { Play, Hand } from "@phosphor-icons/react";

import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { CyclesContext } from '../../contexts/CyclesContext';
import { useContext } from 'react';

const onSubmitFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Favor informe a tarefa'),
    timer: zod.number().min(1).max(60)
})

type SubmitFormData = zod.infer<typeof onSubmitFormValidationSchema>

export default function Home() {
    const { createNewCycle, activeCycle, resetCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<SubmitFormData>({
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

    const handleCreateNewCycle = (data: SubmitFormData) => {
        createNewCycle(data)
        reset()
    }

    const handleResetCycle = () => {
        resetCycle()
        reset()
    }

    return (
        <MainContanier>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <TaskForm />
                </FormProvider>
                <Countdown />
                {!activeCycle ? (
                    <button type='submit' disabled={isSubmitDisabled}><Play size={30} />Começar</button>
                ) : (
                    <button type='reset' onClick={handleResetCycle}><Hand size={30} />Interromper</button>
                )}
            </form>
        </MainContanier>
    )
}