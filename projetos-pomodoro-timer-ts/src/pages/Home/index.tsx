import { MainContanier } from './styles';
import { Play, Hand } from "@phosphor-icons/react";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod'
import { useState, useEffect } from 'react';

import { differenceInSeconds } from 'date-fns';

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

export default function Home() {
    const { register, handleSubmit, watch, reset } = useForm({
        resolver: zodResolver(onSubmitFormValidationSchema),
        defaultValues: {
            task: '',
            timer: 0
        }
    });

    const [cycle, setCycle] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>()
    const [secondsTake, setSecondsTake] = useState(0)

    const task = watch('task')
    const timer = watch('timer')
    const isSubmitDisabled = (!timer || !task)

    const activeCycle = cycle.find(data => data.id === activeCycleId)

    const totalSeconds = activeCycle ? activeCycle.timer * 60 : 0   // timer * 60 para pegar os segundos dos minutos
    const currentSeconds = activeCycle ? totalSeconds - secondsTake : 0
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60  // Qual numero sobra quando divido os segundos por 60
    const minutesString = String(minutesAmount).padStart(2, '0')
    const secondsString = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        let interval: number

        if (activeCycle) {
            interval = setInterval(() => {
                const seccondsDiference = differenceInSeconds(
                    new Date(),
                    activeCycle.startDate
                )

                if (seccondsDiference >= totalSeconds) {
                    setCycle(state =>
                        state.map(data => {
                            if (data.id === activeCycleId) {
                                return { ...data, finishedDate: new Date() }
                            } else {
                                return data
                            }
                        })
                    )

                    setSecondsTake(totalSeconds)
                    clearInterval(interval)
                } else {
                    setSecondsTake(seccondsDiference)
                }

            }, 1000);
        }

        return () => {
            clearInterval(interval)
        } // Funcao que deleta os intervalos anteriores

    }, [activeCycle, totalSeconds, activeCycleId])

    useEffect(() => {
        if (activeCycle) document.title = `${minutesString}:${secondsString}`

        return () => {
            document.title = 'Vite + React + TS'
        }
    }, [minutesString, secondsString, activeCycle]) // Ativa contagem no titulo


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
                <header>
                    <label htmlFor="text">Vou trabalhar em </label>
                    <input
                        type="text"
                        list="text-suggestion"
                        id="text"
                        placeholder='Dê um nome para o seu projeto'
                        {...register('task')}
                        disabled={activeCycle != null}
                    />
                    <datalist id="text-suggestion">
                        <option>Estudar react</option>
                        <option>Estudar Js</option>
                        <option>Estudar Python</option>
                    </datalist>
                    <label htmlFor="number">durante</label>
                    <input
                        type="number"
                        id="number"
                        placeholder='00'
                        {...register('timer', { valueAsNumber: true })}
                        disabled={activeCycle != null}
                    />
                    <span>minutos.</span>
                </header>
                <article>
                    <div>{minutesString[0]}</div>
                    <div>{minutesString[1]}</div>
                    <span>:</span>
                    <div>{secondsString[0]}</div>
                    <div>{secondsString[1]}</div>
                </article>
                {!activeCycle ? (
                    <button type='submit' disabled={isSubmitDisabled}><Play size={30} />Começar</button>
                ) : (
                    <button type='reset' onClick={handleReset}><Hand size={30} />Interromper</button>
                )}
            </form>
        </MainContanier>
    )
}