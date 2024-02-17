import {
    questions,
    questionsType
} from "./questionsData";

type actionType = {
    type: string
}
export const questionsReducer = (state: questionsType = questions, action: actionType): questionsType => {
    return state;
}