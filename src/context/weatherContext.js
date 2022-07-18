import { createContext, useContext, useState, useEffect, useReducer } from "react"

const AppContext = createContext()
// Costumer Context Olşturuldu.
export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext)
    return {
        state,
        dispatch,
        
    }
}
const initialState = { city: "adana" }
const reducer = (state, action) => {
    switch (action.type) {
        case "onChange":
            return { city: action.payload }
            break;

        default:
            break;
    }
}
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    

    return (
        <AppContext.Provider value={
            {
                dispatch,
                state
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}
