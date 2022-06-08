import { useState, useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
import Butt from './buttons/Butt'

export default function Post(props) {
    const [userName, setUserName] = useState("")
    const [visible, setVisible] = useState("hidden")
    const [edit, setEdit] = useState("")
    const [myDataS, setMyDataS] = useState("")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }



    

    useEffect(() => {
       
        async function fetchMyUser() {
            if (props.userId === "a") {
                setUserName("Admin")
            } else {
                try {
                    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`);
                    const body = await result.json();
                    // console.log(body)
                    setUserName(body.name);
                } catch (err) {
                    // error handling code
                }
            }
        }
        fetchMyUser()

    }, [props.userId])

    useEffect(()=>{
           if (props.userId === "a") {
        setUserName("Admin")
    }
    }, [props.userId])


  async function editContent (){
        // setEdit(!edit)
       await props.dataS(myDataS)
        console.log(myDataS)
       await props.finish(edit)
        console.log(edit)
        setVisible(visible === "hidden" ? "visible": "hidden")       
    }

    function onChangeFct (e) {
        setEdit(e.target.value)
        
        setMyDataS(e.target.attributes.dataSet.value)
    }


    return (
        <Container>
            <UpContainer>
                <UserAndPicture>
                    <Picture>
                        <img width={'28px'} height={'28px'} style={{ backgroundSize: "cover", borderRadius: "50%" }} src={`https://picsum.photos/200/${getRandomInt(100)}`} alt=''></img>
                    </Picture>
                    <UserName>{userName}</UserName>
                </UserAndPicture>
                <TitleAndContent>
                    <Title>{props.title}</Title>
                    <Content>{visible==="hidden"?props.body:""}
                        <textarea dataSet={props.title} style={{visibility: visible, background: "transparent", outline: "none", color: "white", height:"60px"}} onChange={onChangeFct}>{props.body}</textarea>
                    </Content>
                </TitleAndContent>
                <Delete>
                    <Butt svg={3}></Butt>
                </Delete>
            </UpContainer>
            <Buttons>
                <Butt svg={0}></Butt>
                <Butt svg={2}></Butt>
                <Butt svg={1} edit={editContent}></Butt>
            </Buttons>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 150px;
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
    width: 60px;

`
const TitleAndContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: left;
    width: 60%;
    gap: 10px;
    
`
const Title = styled.h3`
    height:20px;
::-webkit-scrollbar {

    -webkit-appearance: none;

    width: 2px;

    height: 2px
    

}

  /* Track */
::-webkit-scrollbar-track {
  width:2px;
  background: transparent;
  // opacity:0.5;
}
  /* Handle */
  ::-webkit-scrollbar-thumb {
   width: 2px;
    background: white;
  }
    overflow-x: scroll;
    overflow-y: hidden;
    overflow-wrap: break-word;
    white-space: nowrap;
    /*firefox scrollBStyle*/
    scrollbar-color: white;
    scrollbar-width: thin;
    
`
const Content = styled.div`
  height: 60px;
  overflow-y: scroll;
  ::-webkit-scrollbar {

    -webkit-appearance: none;

    width: 2px;

    height: 2px
    

}

  /* Track */
::-webkit-scrollbar-track {
  width:2px;
  background: transparent;
  // opacity:0.5;
}
  /* Handle */
  ::-webkit-scrollbar-thumb {
   width: 2px;
    background: white;
  }
  /*firefox scrollBStyle*/
  scrollbar-color: white;
  scrollbar-width: thin;

`
const Delete = styled.div`

`
const Buttons = styled.div`
    display:flex;
    justify-content: space-between;
    // padding-top: 5px;
`