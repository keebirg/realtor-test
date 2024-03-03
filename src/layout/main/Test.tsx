import React, {
    KeyboardEvent,
    useState,
} from 'react';

import {
    answersOneQuestionType,
    answersType
} from "../../state/answerData";
import styled from "styled-components";
import {
    Button,
    Typography
} from "@mui/material";
import {Container} from "../../components/Container";
import {AnswersMapList} from "./AnswersMapList";

type testPropsType = {
    question: string
    onClickComplete: () => void
    answers: answersOneQuestionType
    onClickAnswer: (сurrentValue: string) => void
}

export const Test = (props: testPropsType) => {

    const [сurrentValue, setCurrentValue] = React.useState('');

    const [error, setError] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setCurrentValue((event.target as HTMLInputElement).value);
    };


    const onClickAnswer = () => {
        if (сurrentValue) {
            setCurrentValue('');
            props.onClickAnswer(сurrentValue);
        } else {
            setError('error')
        }

    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') onClickAnswer();

    }

    type colorType = "error"
    return (

        <TestStyled>
            <Container>
                <Block>
                    <Typography variant={'h6'}>{props.question}</Typography>
                    <AnswersMapList
                        onKeyDown={onKeyDownHandler}
                        сurrentValue={сurrentValue}
                        handleChange={handleChange}
                        answersOneQuestion={props.answers}
                        error={false}/>

                    <ButtonGroupStyled>
                        {error ?
                            <Button color={"error"} onClick={onClickAnswer} variant="contained">
                                Ответить
                            </Button> :
                            <Button onClick={onClickAnswer} variant="contained">
                                Ответить
                            </Button>
                        }

                        <Button onClick={() => props.onClickComplete()} variant="contained">
                            Завершить
                        </Button>
                    </ButtonGroupStyled>
                </Block>
            </Container>
        </TestStyled>
    );
};


const TestStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  margin: 90px 0 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
const ButtonGroupStyled = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`
export const Block = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  padding: 15px;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;

`