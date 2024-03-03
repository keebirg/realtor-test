import React from 'react';
import {
    Icon,
    iconIdType
} from "../../components/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SocialItemData: Array<{ iconId: iconIdType, href: string }> = [
    {iconId: "instagram", href: "https://www.instagram.com/tvoyatlas.ru/"},
    {iconId: "vk", href: "https://vk.com/public112976995"},
    {iconId: "website", href: "https://атласнедвижимости.рф/"},
]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                {/*<Typography variant={'subtitle1'}>Атлас Недвижимости</Typography>*/}
                <SocialList>
                    {SocialItemData.map((t, index) => {
                        return (
                            <SocialItem key={index}>
                                <SocialLink href={t.href}>
                                    <Icon width={"21"} height={"21"} iconId={t.iconId}/>
                                </SocialLink>
                            </SocialItem>
                        )
                    })}
                </SocialList>
                <Copyright>© 2024 keebirg production.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.borderColorHeader};
  padding: 10px 0;
  width: 100%;
`

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`



const Copyright = styled.small`
  opacity: 0.5;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 5px 0;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.10);

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};


  &:hover {
    color: ${theme.colors.font};
    transform: translateY(-4px);
  }
`
