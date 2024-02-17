import React, {
    useEffect,
    useState
} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StartTest} from "./StartTest";
import {Test} from "./Test";
import {End} from "./End";

export const Main = () => {
    const [startFlag, setStartFlag] = useState(true)
    const [testFlag, setTestFlag] = useState(false)
    const [endFlag, setEndFlag] = useState(false)

    const [name, setName] = useState('');

    const clickStarted = () => {
        sessionStorage.clear()
        sessionStorage.setItem('name', JSON.stringify(name))
        setStartFlag(false)
        setTestFlag(true)
        setEndFlag(false)
    }

    const onClickComplete=()=>{
        setStartFlag(false)
        setTestFlag(false)
        setEndFlag(true)
    }

    const onclickRepeat=()=>{
        sessionStorage.clear()
        setStartFlag(true)
        setTestFlag(false)
        setEndFlag(false)
    }

    const getBackSaveValue = (key: string, setFunction: (value: (any)) => void) => {
        const tempValue = sessionStorage.getItem(key)
        if (tempValue) {
            setFunction(JSON.parse(tempValue))
        }
    }

    //startFlag
    useEffect(()=>{
        getBackSaveValue('startFlag', setStartFlag)
    },[])

    useEffect(()=>{
     sessionStorage.setItem('startFlag', JSON.stringify(startFlag))
    }, [startFlag])

    //name
    useEffect(()=>{
        getBackSaveValue('name', setName)
    },[])

    //testFlag
    useEffect(()=>{
        getBackSaveValue('testFlag', setTestFlag)
    },[])

    useEffect(()=>{
        sessionStorage.setItem('testFlag', JSON.stringify(testFlag))
    }, [testFlag])

    //endFlag
    useEffect(()=>{
        getBackSaveValue('endFlag', setEndFlag)
    },[])

    useEffect(()=>{
        sessionStorage.setItem('endFlag', JSON.stringify(endFlag))
    }, [endFlag])

    return (
        <MainStyled>
            {startFlag && <StartTest
                clickStarted={clickStarted}
                setName={setName}
                name={name}/>}
            {testFlag && <Test onClickComplete={onClickComplete}/>}
            {endFlag && <End onclickRepeat={onclickRepeat}/>}
        </MainStyled>
    );
};


const MainStyled = styled.div`
  background-color: ${theme.colors.backgroundColorMain};
  display: flex;
  justify-content: center;
  align-items: center;
`