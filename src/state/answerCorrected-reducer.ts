import {
    answerCorrectedData,
    answerCorrectedDataType
} from "./answerCorrectedData";

type actionType = {
    type: string
}

export const answerCorrectedReducer = (state: answerCorrectedDataType = answerCorrectedData, action: actionType): answerCorrectedDataType => {
    return state;
}