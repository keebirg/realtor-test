import {
    combineReducers,
    createStore
} from "redux";
import {answerReducer} from "./answer-reducer";
import {questionsReducer} from "./questions-reducer";
import {answerCorrectedReducer} from "./answerCorrected-reducer";



export const rootReducer=combineReducers({
    questions:questionsReducer,
    answers: answerReducer,
    answerCorrected:answerCorrectedReducer
})

export type AppRootState=ReturnType<typeof rootReducer>

export const store=createStore(rootReducer);