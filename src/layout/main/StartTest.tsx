import React, {
    KeyboardEvent,
    ChangeEvent,
    useState,
} from 'react';
import {
    Button,
    TextField
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

type StartTestPropsType={
    onclickStarted:()=>void
    setName:(str:string)=>void
    name:string
}

export const StartTest = (props: StartTestPropsType) => {
    const [error, setError] = useState('');


    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => props.setName(event.currentTarget.value)

    const start = () => {
        if (!props.name.trim()) {
            setError("Введите имя");
            return;
        }
        props.onclickStarted();
    }

    const onKeyUpHandler = () => setError('');
    const onKeyDownHandler=(event: KeyboardEvent<HTMLDivElement>)=>{
        if(event.key==='Enter') start();
    }
    return (
        <StartTestStyled onKeyDown={onKeyDownHandler}>
            <TextField
                value={props.name}
                onChange={nameChangeHandler}
                onKeyUp={onKeyUpHandler}
                error={!!error}
                label="Введите имя"
                variant="outlined"/>

            <Button  onClick={start} size={"large"} variant="contained" endIcon={<SendIcon/>}>
                Начать тест
            </Button>
        </StartTestStyled>
    );
};

const StartTestStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 100vh;
`