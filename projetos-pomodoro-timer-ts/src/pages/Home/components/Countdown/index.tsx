import { CountdownContanier } from "./styles"
import { CyclesContext } from "../../index"

import { useEffect, useContext } from "react"
import { differenceInSeconds } from "date-fns"

export default function Countdown() {
    const { activeCycle, activeCycleId, finishedCycle, secondsTake, updatingSecondsPassed } = useContext(CyclesContext)

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
                    finishedCycle()

                    document.title = `${minutesString}:${secondsString}` // Ativa contagem no titulo

                    updatingSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    updatingSecondsPassed(seccondsDiference)
                }

            }, 1000);
        }

        return () => {
            clearInterval(interval)
            document.title = 'Vite + React + TS'
        } // Funcao que deleta os intervalos anteriores

    }, [
        activeCycle,
        totalSeconds,
        activeCycleId,
        minutesString,
        secondsString
    ])

    return (
        <CountdownContanier>
            <div>{minutesString[0]}</div>
            <div>{minutesString[1]}</div>
            <span>:</span>
            <div>{secondsString[0]}</div>
            <div>{secondsString[1]}</div>
        </CountdownContanier>
    )
}