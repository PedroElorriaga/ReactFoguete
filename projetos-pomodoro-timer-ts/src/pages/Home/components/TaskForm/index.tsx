import { FormContanier } from "./styles"
import { CyclesContext } from "../../../../contexts/CyclesContext"

import { useContext } from "react";
import { useFormContext } from "react-hook-form";


export default function TaskForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContanier>
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
        </FormContanier>
    )
}