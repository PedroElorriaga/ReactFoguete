import { createContext, ReactNode, useReducer } from "react";


export interface CoffeStockType {
    id: number,
    coffeTitle: string,
    coffeDescription: string,
    coffePrice: number,
    coffeTags: string[],
    coffeImage: string
}

export interface ItemCartState {
    coffes: CoffeStockType,
    coffeQuantity: number
}

interface ChildrenProviderProps {
    children: ReactNode
}

interface ItensContextType {
    addItemInTheCart: (item: ItemCartState) => void,
    removeItemInTheCart: (id: number) => void,
    updateItemInTheCart: (id: number, increment: boolean) => void,
    itensInTheCart: ItemCartState[]
}

export const ItensContext = createContext({} as ItensContextType)

export function ItensContextProvider({ children }: ChildrenProviderProps) {
    const [itensInTheCart, dispatch] = useReducer((state: ItemCartState[], action: any) => {
        switch (action.type) {
            case 'addItemToCartAction':
                const existingItemIndex = state.findIndex(i =>
                    i.coffes.id === action.payload.item.coffes.id
                )

                if (existingItemIndex !== -1) {
                    const updatedState = [...state]
                    const newQuantity = updatedState[existingItemIndex].coffeQuantity + action.payload.item.coffeQuantity

                    if (newQuantity > 10) {
                        alert(
                            `Você pode adicionar somente 10 itens por tipo de café`
                        )

                        return updatedState
                    }

                    updatedState[existingItemIndex].coffeQuantity = newQuantity
                    return updatedState
                }

                return [...state, action.payload.item]

            case 'removeItemToCartAction':
                return state.filter(item => item.coffes.id !== action.payload.id) // Retorna apenas itens diferentes do removido

            case 'updateCartItemAction':
                const existingIdIndex = state.findIndex(i =>
                    i.coffes.id === action.payload.id
                )

                if (existingIdIndex !== -1) {
                    const updatedState = [...state]

                    if (action.payload.increment) {
                        const newQuantity = updatedState[existingIdIndex].coffeQuantity + 1
                        console.log(newQuantity)

                        if (newQuantity > 10) return updatedState

                        updatedState[existingIdIndex].coffeQuantity = newQuantity
                        return updatedState
                    } else {
                        const newQuantity = updatedState[existingIdIndex].coffeQuantity - 1

                        if (newQuantity < 1) return updatedState

                        updatedState[existingIdIndex].coffeQuantity = newQuantity
                        return updatedState
                    }
                }

                return [...state, action.payload.item]

            default:
                return state
        }
    }, [])

    const addItemInTheCart = (item: ItemCartState) => {
        dispatch({
            type: 'addItemToCartAction',
            payload: {
                item,
            }
        })
    }

    const removeItemInTheCart = (id: number) => {
        dispatch({
            type: 'removeItemToCartAction',
            payload: {
                id
            }
        })
    }

    const updateItemInTheCart = (id: number, increment: boolean) => {
        dispatch({
            type: 'updateCartItemAction',
            payload: {
                id,
                increment
            }
        })
    }

    return (
        <ItensContext.Provider value={{
            addItemInTheCart,
            removeItemInTheCart,
            updateItemInTheCart,
            itensInTheCart
        }}>
            {children}
        </ItensContext.Provider>
    )
}