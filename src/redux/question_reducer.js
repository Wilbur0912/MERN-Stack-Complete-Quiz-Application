import { createSlice } from "@reduxjs/toolkit"

/** create reducer */
export const questionsReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [ ],
        answers: [],
        trace : 0
    },
    reducers : {
        startExamAction:(state,action)=>{
            return {
                ...state,
                queue : action.payload 
            }
        },
        moveNextAction: (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }

        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () =>{
            return {
                queue: [ ],
                answers: [],
                trace : 0
            }
        }
    }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction} = questionsReducer.actions

export default questionsReducer.reducer;