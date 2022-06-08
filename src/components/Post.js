import React from 'react'
import styled from 'styled-components'
import Butt from './buttons/Butt'

export default function Post(props) {
    return (
        <Container>
            <UpContainer>
                <UserAndPicture>
                    <Picture></Picture>
                    <UserName>user</UserName>
                </UserAndPicture>
                <TitleAndContent>
                    <Title>Title</Title>
                    <Content>Lorem</Content>
                </TitleAndContent>
                <Delete>
                    <Butt svg={3}></Butt>
                </Delete>
            </UpContainer>
            <Buttons>
                <Butt svg={0}></Butt>
                <Butt svg={2}></Butt>
                <Butt svg={1}></Butt>
            </Buttons>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 120px;
    width: 400px;
    background: linear-gradient(90deg, #576074 0%, rgba(0, 51, 72, 0.63) 0.01%, rgba(56, 119, 99, 0.29) 55.21%, rgba(0, 51, 72, 0.15) 100%);
    box-shadow: -5px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color:white;
    font-family: 'Quicksand';
`
const UpContainer = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 15px;
`
const UserAndPicture = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const Picture = styled.div`
    border-radius: 50%;
    border: 1px dashed #FFFFFF;
    height: 30px;
    width: 30px;
`

const UserName = styled.div`

`
const TitleAndContent = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: left;
    width: 60%;
    gap: 10px;
    
`
const Title = styled.h3`

`
const Content = styled.div`

`
const Delete = styled.div`

`
const Buttons = styled.div`
    display:flex;
    justify-content: space-between;
`