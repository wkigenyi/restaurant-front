import { createContext, useContext, useReducer } from "react";


export const RestaurantsContext = createContext();

const reducer = (state,action) =>{
    switch(action.type){
        case 'SET_RESTAURANTS': return {restaurants:action.payload}
        case 'CREATE_RESTAURANT': return {restaurants:[action.payload,...state.restaurants]}
        case 'DELETE_RESTAURANT': return {restaurants:state.restaurants.filter(a => a._id !== action.payload._id)}
        case 'UPDATE_RESTAURANT': return {restaurants:[action.payload,...state.restaurants.filter(a => a._id !== action.payload._id)]}
        default:
    }
}
export const RestaurantsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer,{restaurants:[]})
    return (<RestaurantsContext.Provider value={{...state,dispatch}}>{children}</RestaurantsContext.Provider>)
}

export const useRestaurantsContext = () => {
    return useContext(RestaurantsContext);
}