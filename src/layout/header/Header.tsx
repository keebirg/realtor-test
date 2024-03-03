import React from 'react';
import {styled} from "styled-components";
import {Container} from "../../components/Container";
import {Icon} from "../../components/Icon";
import {Typography} from "@mui/material";
import {Timer} from "./Timer";
import {theme} from "../../styles/Theme";
import logo from "../../assets/image/logo.png"

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper>
                    <Img src={logo}/>
                    {/*<FlexWrapper>*/}
                    {/*    <Icon iconId={'ah'}/>*/}
                    {/*    <TitleStyled>*/}
                    {/*        <Typography variant={'h5'} >Агенство недвижимости</Typography>*/}
                    {/*    </TitleStyled>*/}
                    {/*</FlexWrapper>*/}
                    {/*<Timer*/}
                    {/*   timerActive={true}*/}
                    {/*   minutes={20}*/}
                    {/*   seconds={0}*/}
                    {/*   response={()=>{}}/>*/}
                </FlexWrapper>
            </Container>
        </HeaderStyled>
    );
};


const HeaderStyled = styled.header`
  position: fixed;
  z-index: 99999;

  background-color: white;

  width: 100%;
  padding: 10px;
`
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

 
`

const Img=styled.img`
  height: 50px;
`

const TitleStyled = styled.div`
  text-transform: uppercase;

  @media ${theme.media.mobile} {
    display: none;
  }
`