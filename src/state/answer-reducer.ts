import {
    answers,
    answersOneQuestionType,
    answersType
} from "./answerData";

type getAnswerOneQuestion = {
    type: 'GET-ANSWER-ONE-QUESTION'
    numberQuestion: number
}

type actionType = {
    type:string
}

export const answerReducer = (state: answersType = answers, action: actionType): answersType => {
    switch (action.type) {
        default:
            return state;
    }
}

