import React, { createContext, useContext, useReducer } from "react";

interface ItemProps {
    id: number
    name: string
    price: number
    descount: number
    pricebase: number
    descrition: string
    imgUrl: string
}
type CartState = {
    items: ItemProps[];
}
type CartActions = 
    | { type: 'ADD_ITEM'; item: ItemProps }
    | { type: 'REMOVE_ITEM'; id: number }
    | { type: 'CLEAR_CART'; }

type CartContextType = {
    cartState: CartState
    addItem: (item: ItemProps) => void
    removeItem: (id: number) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const reducer = (state: CartState, action: CartActions) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
               items: [...state.items, action.item]
            }
        case 'REMOVE_ITEM':
            return {
                items: state.items.filter((item) => item.id !== action.id)
            }
        case 'CLEAR_CART':
            return {
                items: []
            }
        default: 
            return state;
    }
}

const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const [cartState, dispatch] = useReducer(reducer,{items: []})

    const addItem = (item: ItemProps) => {
        dispatch({ type: 'ADD_ITEM', item})
    }
    const removeItem = (id: number) => {
        dispatch({ type: 'REMOVE_ITEM', id})
    }
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }
    return (
        <CartContext.Provider value={{
            cartState, addItem, removeItem, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
const useCart = () => {
    const context = useContext(CartContext)
    if(context === undefined){
        throw new Error("useCart  está sendo usado sem o provider!")
    }
        return context;
    }

export {CartProvider, useCart}
