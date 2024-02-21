import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup
} from '@mui/material';
import React, {KeyboardEvent} from 'react';
import styled from "styled-components";
import {
    answersOneQuestionType
} from "../../state/answerData";
import {v1} from "uuid";
import {pink} from "@mui/material/colors";

type AnswersMapListPropsType = {
    onKeyDown?:(event: KeyboardEvent<HTMLDivElement>)=>void
    answersOneQuestion: answersOneQuestionType
    сurrentValue: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean
}

export const AnswersMapList = (props: AnswersMapListPropsType) => {

        let sx={};
    if (props.error) {
        sx = {
            '&.Mui-checked':
                {
                    color: pink[600],
                }
            ,
        }
    }


return (
    <FlexWrapper>
        <FormControl onKeyDown={props.onKeyDown}>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={props.сurrentValue}
                onChange={(event) => props.handleChange(event)}

            >
                {props.answersOneQuestion.map((answer) => {
                    return <FormControlLabel key={v1()} value={answer.id} control={<Radio
                        sx={sx}/>
                    } label={answer.answer}/>
                })}
            </RadioGroup>
        </FormControl>
    </FlexWrapper>
);
}
;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`