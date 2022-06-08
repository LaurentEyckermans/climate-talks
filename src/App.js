import React, { useState, useEffect } from "react";
import Logo from './components/Logo';
import Input from './components/Input';
import Post from './components/Post';
import Butt from './components/buttons/Butt'
import './App.css';
import styled from 'styled-components';

function App() {


  const [data, setData] = useState([]);
  const [postsArr, setPostsArr] = useState([])
  const [inputs, setInputs] = useState({})
  const [dataS, setDataS] = useState("")



  const fetchData = async () => {
    // let storedData = JSON.parse(localStorage.getItem("my-posts"));
    // console.log(storedData) 
    // if(storedData!=null){
    //   setData(storedData)
    // }else{
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const body = await result.json();
      setData(body);
      //  setPostsArr(data.slice(8,20))
    } catch (err) {
      // error handling code
    }


  }

  useEffect(() => {
    fetchData()

  }, [])



  useEffect(() => {
    // console.log(data[0])
    setPostsArr(data.slice(8, 20))
  }, [data])




  function storeMyValue(value) {
    // console.log("storeMy" +value)
    setInputs(inputs => ({ ...inputs, ...value }))
    // console.log(inputs)
    // console.log(postsArr)
  }

  function createPost() {
    console.log("createPost")
    const newPostsArr = [...postsArr]
    newPostsArr.unshift({ userId: "a", id: null, title: inputs.title, body: inputs.content })

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        userId: "a", id: null, title: inputs.title, body: inputs.content
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    // setInputs(inputs => ({title:inputs.title, body:inputs.content}))
    // setPostsArr(postsArr.push(inputs))
    setPostsArr(newPostsArr)
    // console.log(newPostsArr)
    localStorage.setItem("my-posts", JSON.stringify(postsArr));
  }

  function updateArr(arr) {
    setPostsArr(arr)
  }

  function updatePost(value) {
    console.log(value)
    let myIndex = postsArr.indexOf(postsArr.find(element => element.title === dataS))
    console.log(myIndex)
    if (myIndex >= 0) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${myIndex}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: inputs.title, body: value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      const newPostsArr = [...postsArr]
      newPostsArr.splice(myIndex, 1, { title: inputs.title, body: value })
      updateArr(newPostsArr)
    }
  }

  function deleteFct(){
    //DeleteFCT

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });

  }



  function myDataS(val) {
    setDataS(val)
  }

  return (


    <Container>
      <Header>
        <Logo title1={"Climate"} title2={"TALKS"}></Logo>
        <UserAndPicture>
          <User>Connected as Admin</User>
          <UPicture></UPicture>
        </UserAndPicture>
      </Header>
      <Content>
        <AboutAndAnim3D>
          <About>
            Let’s talk about changes, actions in Belgium, in Europe for the climate.
          </About>
          <Anim3D>
            Anim3D
          </Anim3D>
        </AboutAndAnim3D>
        <InputAndMessage>
          <Inputs>
            <Input title={"title"} placeholder={"title"} widthBar={'100px'} storeValue={storeMyValue}></Input>
            <InputAndSend>
              <Input title={"content"} placeholder={"content"} storeValue={storeMyValue}></Input>
              <Butt svg={4} send={createPost}></Butt>
            </InputAndSend>
          </Inputs>
          <Message>
            Message
          </Message>
        </InputAndMessage>
        <Posts>
          <GroupPosts>
            {postsArr.map((post) =>
              <Post title={post.title} body={post.body} userId={post.userId === "a" ? "a" : post.userId} finish={updatePost} dataS={myDataS}></Post>
            )}
          </GroupPosts>
        </Posts>

      </Content>
    </Container>



  );
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 80px;
  background: radial-gradient(35.87% 70.93% at 89.97% 8.54%, rgba(89, 148, 102, 0.67) 0%, rgba(89, 148, 102, 0) 100%)
   /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(122.56deg, #003348 33.82%, #005375 81.99%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const UserAndPicture = styled.div`
  display: flex;
  width: 300px;
  height: 35px;
  gap: 30px;
  align-items: center;
  align-self: center;
  justify-content: flex-end;
`
const User = styled.div`
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: white;
  text-align: center;
`

const UPicture = styled.div`
  border-radius: 50%;
  border: 1px dashed #FFFFFF;
  height: 74px;
  width: 74px;
  background-image: url("https://picsum.photos/200/400");
  background-size: cover 70px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  color: white;
`

const AboutAndAnim3D = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 25vw;
`

const About = styled.h1`
  font-family: Poetsen One Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 50px;
  letter-spacing: 0.04em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 35vw;
`

const Anim3D = styled.div`

`

const InputAndMessage = styled.div`
  display: flex;
  justify-content: space-between;
`

const Inputs = styled.div`
  display:flex;
  flex-direction: column;
`
const InputAndSend = styled.div`
  display:flex;
  align-items: flex-end;
  gap: 13px;
`


const Message = styled.div`
margin-right: 25vw;

`

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  gap: 40px;
  overflow-y: scroll;
  height: 300px;
  // flex-wrap:wrap;
  /* width */
  ::-webkit-scrollbar {

    -webkit-appearance: none;

    width: 2px;

    height: 9px
    

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

}

}


  
`

const GroupPosts = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  padding-right: 20px;
  padding-left: 5px;
  /*firefox scrollBStyle*/
  scrollbar-color: white;
  scrollbar-width: thin;
`