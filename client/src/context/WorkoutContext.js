import { createContext, useReducer } from 'react'

export const WorkoutContext = createContext()

export const WorkoutContextProvider = ({ children }) => {

    const workoutsReducer = (state, action) => {
        switch(action.type){
            case 'SET_WORKOUTS':
                return{
                    workouts: action.payload
                }
            case 'CREATE_WORKOUT':
                return{
                    workouts: [action.payload, ...state.workouts]
                }
            case 'DELETE_WORKOUT':
                return{
                    workouts: state.workouts.filter((workout) => workout._id !== action.payload._id )
                }
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return(
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}