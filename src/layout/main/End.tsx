import React from 'react';
import {useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {questionsType} from "../../state/questionsData";
import styled from "styled-components";
import {Container} from "../../components/Container";
import {
    Button,
    Typography
} from "@mui/material";
import {
    RestartAltOutlined
} from "@mui/icons-material";
import {answersType} from "../../state/answerData";
import {
    answerCorrectedDataType
} from "../../state/answerCorrectedData";
import {AnswersMapList} from "./AnswersMapList";
import {Block} from "./Test";
import {v1} from "uuid";

type endPropsType = {
    onclickRepeat: () => void
}

export const End = (props: endPropsType) => {

    const answersData = useSelector<AppRootState, answersType>(state => state.answers)
    const questionsData = useSelector<AppRootState, questionsType>(state => state.questions)
    const answerCorrectedData = useSelector<AppRootState, answerCorrectedDataType>(state => state.answerCorrected)

    const getBackValue = (key: string) => {
        const tempValue = sessionStorage.getItem(key)
        if (tempValue) {
            return JSON.parse(tempValue)
        }
    }


    let arrayAnsweredQuestionError = [] //массив номеров вопросов на которые не ответили
    let arrayAnsweredError: Array<string> = [] //массив неправильных ответов
    let counterAnswered = 0; // счетчик отвеченых всего
    let counterAnsweredError = 0; // счетчик отвеченых неправильно
    for (let i = 0; i < questionsData.length; i++) {
        let answeredQuestion: string = getBackValue(JSON.stringify(i))

        if (answeredQuestion) { //проверка отвечал ли на вопрос
            counterAnswered++;
            if (Number(answeredQuestion) !== answerCorrectedData[i]) {//проверка правильно ли ответил, если не правильно выполняем
                counterAnsweredError++;
                arrayAnsweredQuestionError.push(i);
                arrayAnsweredError.push(answeredQuestion);
            }
        }

    }

    let errorFlag = false;
    if (arrayAnsweredQuestionError[0] !== undefined) errorFlag = true;
    console.log(errorFlag)
    return (
        <EndStyled>
            <Container>
                <FlexWrapper>
                    <Typography variant={'h6'}>Общее колличество вопросов на которые вы
                        ответили {counterAnswered}</Typography>

                    {errorFlag ? <Typography variant={'h6'} color={'red'}>Ваши ошибки</Typography> :
                        <Typography variant={'h6'} color={'seagreen'}>Все правильно</Typography>}

                    {arrayAnsweredQuestionError.map((AnsweredQuestionError, index) => {
                        return (
                            <Block key={v1()}>
                                <Typography variant={'h6'}>{questionsData[AnsweredQuestionError]}</Typography>
                                <AnswersMapList
                                    сurrentValue={arrayAnsweredError[index]}
                                    handleChange={() => {
                                    }}
                                    answersOneQuestion={answersData[AnsweredQuestionError]}
                                    error={true}/>
                            </Block>
                        )
                    })}

                    <Button onClick={() => props.onclickRepeat()} size={"large"} variant="contained"
                            endIcon={<RestartAltOutlined/>}>
                        Повторить
                    </Button>
                </FlexWrapper>
            </Container>
        </EndStyled>

    );
};


const EndStyled = styled.div`
  width: 100%;
  margin: 90px 0 10px;
  height: 100%;
  min-height: 700px;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`