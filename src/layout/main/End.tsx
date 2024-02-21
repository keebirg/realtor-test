import React from 'react';

import styled from "styled-components";
import {Container} from "../../components/Container";
import {
    Button,
    Typography
} from "@mui/material";
import {
    RestartAltOutlined
} from "@mui/icons-material";
import {
    answersOneQuestionType,
} from "../../state/answerData";

import {AnswersMapList} from "./AnswersMapList";
import {Block} from "./Test";
import {v1} from "uuid";

type endPropsType = {
    onclickRepeat: () => void
    arrayNumberQuestionsError: Array<number>
    getQuestion: (NumberQuestion: number) => string
    getListAnswers: (NumberQuestion: number) => answersOneQuestionType
    counterAnswered: number
    arrayAnswerResponse: Array<number>
}

export const End = (props: endPropsType) => {


    let errorFlag = false;
    if (props.arrayNumberQuestionsError[0] !== undefined) errorFlag = true;

    return (
        <EndStyled>
            <Container>
                <FlexWrapper>
                    <Typography variant={'h6'}>Общее колличество вопросов на которые вы
                        ответили ({props.counterAnswered})</Typography>

                    {errorFlag ? <Typography variant={'h6'} color={'red'}>Ваши ошибки ({props.arrayNumberQuestionsError.length})</Typography> :
                        <Typography variant={'h6'} color={'seagreen'}>Все правильно</Typography>}

                    {props.arrayNumberQuestionsError.map((numberQuestionsError, index) => {
                        return (
                            <Block key={v1()}>
                                <Typography variant={'h6'}>{props.getQuestion(numberQuestionsError)}</Typography>
                                <AnswersMapList
                                    сurrentValue={props.arrayAnswerResponse[numberQuestionsError].toString()}
                                    handleChange={() => {
                                    }}
                                    answersOneQuestion={props.getListAnswers(numberQuestionsError)}
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