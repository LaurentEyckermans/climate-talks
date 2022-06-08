import React from 'react'
import styled from 'styled-components'

export default function Logo({ title1, title2 }) {
    return (
        <Container>
            <Titles>
                <Title>
                    {title1}
                </Title>
                <TitleSecond>
                    {title2}
                </TitleSecond>
            </Titles>
            <Svg>
                <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4724 20H4.1C3.76863 20 3.5 19.7314 3.5 19.4V9.6C3.5 9.26863 3.76863 9 4.1 9H6.86762C7.57015 9 8.22116 8.6314 8.5826 8.02899L11.293 3.51161C11.8779 2.53688 13.2554 2.44422 13.9655 3.33186C14.3002 3.75025 14.4081 4.30635 14.2541 4.81956L13.2317 8.22759C13.1162 8.61256 13.4045 9 13.8064 9H18.3815C19.7002 9 20.658 10.254 20.311 11.5262L18.4019 18.5262C18.1646 19.3964 17.3743 20 16.4724 20Z" stroke="currentColor" stroke-linecap="round" />
                    <path d="M7 20L7 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </Svg>

        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 76px;
  width: 160px;
  border: no-border;
  border-radius: 11px;
  color: white; 
  background: linear-gradient(90deg, #576074 0%, rgba(0, 51, 72, 0.63) 0.01%, rgba(56, 119, 99, 0.29) 55.21%, rgba(0, 51, 72, 0.15) 100%);
  box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);

`

const Titles = styled.div`
display: flex;
  flex-direction: column;
  align-items: left;
  margin-left:4px;
`

const Title = styled.div`
font-family: 'Sarina';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
letter-spacing: 3px;
margin-left: 1px;

`

const TitleSecond = styled.div`
font-family: 'Quicksand';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 25px;
letter-spacing: 14px;
margin-left: 0px;
`

const Svg = styled.div`
margin-right: 2px;
transform: rotate(-22deg);
`