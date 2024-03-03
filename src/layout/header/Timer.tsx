import React, {
    useEffect,
    useState
} from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

type timerPropsType = {
    timerActive: boolean
    minutes: number
    seconds: number

    response:()=>void
}

export const Timer = (props: timerPropsType) => {

    const [seconds, setSeconds] = useState(props.seconds);
    const [minutes, setMinutes] = useState(props.minutes);

    // let [startDate, setStartDate] = useState(new Date);
    //
    // let [endDate, setEndDate] = useState(new Date(2024, 1, 22, 14));
    //
    // console.log((startDate.getTime() - endDate.getTime()) / 1000 / 60)

    setTimeout(() => {
        if (props.timerActive) {
            if (seconds > 0) setSeconds(seconds - 1);
            if (seconds === 0 && minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59)
            }
            if(minutes===0 && seconds===0) {
                props.response()
                setSeconds(props.seconds);
                setMinutes(props.minutes);
            }
        }else {
            setSeconds(props.seconds);
            setMinutes(props.minutes);
        }
    }, 1000);

    return (
            <Item>
                {minutes<10?
                    '0'+minutes+' ':
                    minutes+' '}
                :
                {seconds<10?
                    ' 0'+seconds:
                    ' '+seconds
                }
            </Item>
    );
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));