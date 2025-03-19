import styled from "styled-components";

export const MainContanier = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2.25rem;
    width: 58rem;

    header {
        align-self: start;
    }

    article {
        margin-top: 1rem;
        width: 100%;
        max-height: 30rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: ${props => props.theme["gray-500"]};
            border-radius: 8px;
        }
    }

    table {
        border-collapse: separate;
        border-spacing: 0 0.25rem;
        width: 100%;
        font-size: 0.875rem;
        border-radius: 8px;
    }

    th, td {
        padding: 1.5rem;
        text-align: left;
    }

    th:first-child {
        border-top-left-radius: 8px;
    }

    th:last-child {
        border-top-right-radius: 8px;
    }

    th:nth-child(1) {
        width: 40%;
    }

    th:nth-child(2) {
        width: 15%;
    }

    th:nth-child(4) {
        width: 22%;
    }

    thead {
        background-color: ${props => props.theme["gray-600"]};
        height: 54px;
        color: ${props => props.theme["gray-200"]};
        position: sticky;
        top: 0;
        z-index: 2;
    }

    tbody {
        background-color: ${props => props.theme["gray-700"]};
    }
`

const StatusColors = {
    yellow: 'yellow-500',
    red: 'red-500',
    green: 'green-500'
} as const //Para especificar ao TS que somente esses valores podem ser utilizados

interface StatusProps {
    statusColor: keyof typeof StatusColors
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        background-color: ${props => props.theme[StatusColors[props.statusColor]]};
    }
`