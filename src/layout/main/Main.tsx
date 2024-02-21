import React, {
    useEffect,
    useState
} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StartTest} from "./StartTest";
import {Test} from "./Test";
import {End} from "./End";
import {useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {questionsType} from "../../state/questionsData";
import {
    answersOneQuestionType,
    answersType
} from "../../state/answerData";
import {createRandomArray} from "./createRandomArray";
import {answerCorrectedDataType} from "../../state/answerCorrectedData";

export const Main = () => {
    const questionsData = useSelector<AppRootState, questionsType>(state => state.questions)
    const answersData = useSelector<AppRootState, answersType>(state => state.answers)
    const answerCorrectedData = useSelector<AppRootState, answerCorrectedDataType>(state => state.answerCorrected)

    const [startFlag, setStartFlag] = useState(true)
    const [testFlag, setTestFlag] = useState(false)
    const [endFlag, setEndFlag] = useState(false)

    const [name, setName] = useState('');
    const [сurrentNumberQuestion, setCurrentNumberQuestion] = useState(0)
    const [arrayNumbersQuestions, setArrayNumbersQuestions] = useState<Array<number>>([])
    const [arrayAnswerResponse, setArrayAnswerResponse] = useState<Array<number>>([]) //ответы отвеченых

    const updateName = (newName: string) => {
        setName(newName);
        sessionStorage.setItem('name', JSON.stringify(newName))
    }

    const onclickStarted = () => {
        let arrayRandom = createRandomArray(questionsData.length)
        setArrayNumbersQuestions(arrayRandom)
        sessionStorage.setItem('arrayNumbersQuestions', JSON.stringify(arrayRandom))

        setStartFlag(false)
        setTestFlag(true)
        setEndFlag(false)

        sessionStorage.setItem('startFlag', JSON.stringify(false))
        sessionStorage.setItem('testFlag', JSON.stringify(true))
        sessionStorage.setItem('endFlag', JSON.stringify(false))
    }

    const onClickComplete = () => {
        setStartFlag(false)
        setTestFlag(false)
        setEndFlag(true)

        sessionStorage.setItem('startFlag', JSON.stringify(false))
        sessionStorage.setItem('testFlag', JSON.stringify(false))
        sessionStorage.setItem('endFlag', JSON.stringify(true))
    }

    const onClickRepeat = () => {
        setArrayNumbersQuestions([]);
        sessionStorage.setItem('arrayNumbersQuestions', JSON.stringify([]))
        setCurrentNumberQuestion(0);
        sessionStorage.setItem('сurrentNumberQuestion', JSON.stringify(0))
        setArrayAnswerResponse([])
        sessionStorage.setItem('arrayAnswerResponse', JSON.stringify([]))
        setName('')
        sessionStorage.setItem('name', JSON.stringify(''))

        setStartFlag(true)
        setTestFlag(false)
        setEndFlag(false)
        sessionStorage.setItem('startFlag', JSON.stringify(true))
        sessionStorage.setItem('testFlag', JSON.stringify(false))
        sessionStorage.setItem('endFlag', JSON.stringify(false))
    }

    const onClickAnswer = (сurrentValue: string) => {
        let newArrayAnswerResponse = arrayAnswerResponse.map((el) => el)
        newArrayAnswerResponse.push(Number(сurrentValue))
        setArrayAnswerResponse(newArrayAnswerResponse)
        sessionStorage.setItem('arrayAnswerResponse', JSON.stringify(newArrayAnswerResponse))

        if (сurrentNumberQuestion < questionsData.length - 1) {
            let tempCounter = сurrentNumberQuestion + 1
            setCurrentNumberQuestion(tempCounter)
            sessionStorage.setItem('сurrentNumberQuestion', JSON.stringify(tempCounter))
        } else {
            onClickComplete();
        }
    }

    const getNumber = (number: number): number => {
        return arrayNumbersQuestions[number]
    }

    const getQuestion = (NumberQuestion: number): string => {
        return questionsData[getNumber(NumberQuestion)]
    }

    const getListAnswers = (NumberQuestion: number): answersOneQuestionType => {
        return answersData[getNumber(NumberQuestion)];
    }

    const getArrayNumberQuestionsError = (): Array<number> => {
        let arrayNumberQuestionsError = [] //массив номеров вопросов на которые ответили не правильно

        for (let i = 0; i < arrayAnswerResponse.length; i++) {
            if (arrayAnswerResponse[i] !== answerCorrectedData[getNumber(i)]) {
                arrayNumberQuestionsError.push(i)
            }
        }
        return arrayNumberQuestionsError;
    }

    const getBackSaveValue = (key: string, setFunction: (value: (any)) => void) => {
        const tempValue = sessionStorage.getItem(key)
        if (tempValue) {
            setFunction(JSON.parse(tempValue))
        }
    }

    useEffect(() => {
        getBackSaveValue('name', setName);
        getBackSaveValue('сurrentNumberQuestion', setCurrentNumberQuestion);
        getBackSaveValue('arrayNumbersQuestions', setArrayNumbersQuestions);
        getBackSaveValue('arrayAnswerResponse', setArrayAnswerResponse);

        getBackSaveValue('startFlag', setStartFlag);
        getBackSaveValue('testFlag', setTestFlag);
        getBackSaveValue('endFlag', setEndFlag);

    }, [])

    return (
        <MainStyled>

            {startFlag && <StartTest
                onclickStarted={onclickStarted}
                setName={updateName}
                name={name}/>}

            {testFlag && <Test
                onClickComplete={onClickComplete}
                question={getQuestion(сurrentNumberQuestion)}
                answers={getListAnswers(сurrentNumberQuestion)}
                onClickAnswer={onClickAnswer}/>}

            {endFlag && <End
                onclickRepeat={onClickRepeat}
                arrayNumberQuestionsError={getArrayNumberQuestionsError()}
                getQuestion={getQuestion}
                getListAnswers={getListAnswers}
                counterAnswered={arrayAnswerResponse.length}
                arrayAnswerResponse={arrayAnswerResponse}/>}

        </MainStyled>
    );
};


const MainStyled = styled.div`
  background-color: ${theme.colors.backgroundColorMain};
  display: flex;
  justify-content: center;
  align-items: center;
`