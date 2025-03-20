import { useContext } from "react";
import { MainContanier, Status } from "./styles";

import { CyclesContext } from "../../contexts/CyclesContext"

import { formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR'

export default function History() {
    const { cycle } = useContext(CyclesContext)

    const calcTimeDistance = (date: Date) => formatDistanceToNow(new Date(date),
        {
            locale: ptBR,
            addSuffix: true
        })

    return (
        <MainContanier>
            <header>
                <h2>Meu histórico</h2>
            </header>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefas</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycle.map(data => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.task}</td>
                                    <td>{data.timer}</td>
                                    <td>{calcTimeDistance(data.startDate)}</td>
                                    <td>
                                        {data.stopedDate ? (
                                            <Status statusColor='red'>Interrompido</Status>
                                        ) : data.finishedDate ? (
                                            <Status statusColor='green'>Concluido</Status>
                                        ) : (
                                            <Status statusColor='yellow'>Em andamento</Status>
                                        )}

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </article>
        </MainContanier>
    )
}