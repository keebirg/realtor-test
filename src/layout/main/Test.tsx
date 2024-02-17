import React, {
    useEffect,
    useState
} from 'react';
import {
    useDispatch,
    useSelector
} from "react-redux";
import {AppRootState} from "../../state/store";
import {
    answersType
} from "../../state/answerData";
import {questionsType} from "../../state/questionsData";
import styled from "styled-components";
import {
    Button,
    Typography
} from "@mui/material";
import {Container} from "../../components/Container";
import {AnswersMapList} from "./AnswersMapList";

type testPropsType = {
    onClickComplete: () => void
}

export const Test = (props: testPropsType) => {
    const dispatch = useDispatch()
    const questionsData = useSelector<AppRootState, questionsType>(state => state.questions)
    const answersData = useSelector<AppRootState, answersType>(state => state.answers)

    const [сurrentNumberQuestion, setCurrentNumberQuestion] = useState(0)
    const [сurrentValue, setCurrentValue] = React.useState('');

    const getBackSaveValue = (key: string, setFunction: (value: (any)) => void) => {
        const tempValue = sessionStorage.getItem(key)
        if (tempValue) {
            setFunction(JSON.parse(tempValue))
        }
    }

    useEffect(() => {
        getBackSaveValue('сurrentNumberQuestion', setCurrentNumberQuestion)
    }, [])

    useEffect(() => {
        sessionStorage.setItem('сurrentNumberQuestion', JSON.stringify(сurrentNumberQuestion))
    }, [сurrentNumberQuestion])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue((event.target as HTMLInputElement).value);
    };

    const onClickAnswer = () => {
        sessionStorage.setItem(JSON.stringify(сurrentNumberQuestion), JSON.stringify(сurrentValue))
        setCurrentValue('');
        if (сurrentNumberQuestion < questionsData.length-1) {
            setCurrentNumberQuestion(сurrentNumberQuestion + 1)
        } else {
            props.onClickComplete();
        }

    }

    return (
        <TestStyled>
            <Container>
                    <Block>
                        <Typography variant={'h6'}>{questionsData[сurrentNumberQuestion]}</Typography>
                        <AnswersMapList
                            сurrentValue={сurrentValue}
                            handleChange={handleChange}
                            answersOneQuestion={answersData[сurrentNumberQuestion]}/>

                        <ButtonGroupStyled>
                            <Button onClick={onClickAnswer} variant="contained">
                                Ответить
                            </Button>

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

const FlexWrapper=styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  
`