import React, {
    ChangeEvent,
    useState
} from 'react';
import {
    Button,
    TextField
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

type StartTestPropsType={
    clickStarted:()=>void
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
        props.setName('')
        props.clickStarted();
    }

    const onKeyUpHandler = () => setError('');

    return (
        <StartTestStyled>
            <TextField
                value={props.name}
                onChange={nameChangeHandler}
                onKeyUp={onKeyUpHandler}
                error={!!error}
                label="Введите имя"
                variant="outlined"/>

            <Button onClick={start} size={"large"} variant="contained" endIcon={<SendIcon/>}>
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