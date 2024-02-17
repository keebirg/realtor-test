import React from 'react';
import {styled} from "styled-components";
import {Container} from "../../components/Container";
import {Icon} from "../../components/Icon";
import {Typography} from "@mui/material";

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <FlexWrapper>
                    <Icon iconId={'ah'}/>
                    <TitleStyled>
                        <Typography variant={'h5'} >Агенство недвижимости</Typography>
                    </TitleStyled>
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
`

const TitleStyled = styled.div`
  text-transform: uppercase;
`