import {
    answers,
    answersType
} from "./answerData";

type actionType = {
    type: string
}

export const answerReducer = (state: answersType = answers, action: actionType): answersType => {
    return state;
}