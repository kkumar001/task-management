import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'

const ViewTask = () => {
    return (
        <TaskView>
            <Nav>
                <Link to='/'>
                    <img src={logo} height='100px' width='400px' alt='logo' />
                </Link>
            </Nav>
            <Title>
                VIEW TASK
            </Title>
            <Display>
                <AllContent>
                <h2>DESCRPITION</h2>
                <Content>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Content>
                <Button style={{marginBottom: '10px'}} variant='contained' color='warning' href='/'>BACK TO HOME</Button>
                </AllContent>
            </Display>
        </TaskView>
    )
}

export default ViewTask;

const TaskView = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    height: 100vh
`;

const Nav = styled.div`
    background: #282828;
    display: flex;
    justify-content: center;
`
const Title = styled.h1`
    color: #282828;
    display: flex;
    justify-content: center;
    font-family: 'Trebuchet MS', sans-serif;
    background: #d7d9db;
    margin : 0;
    padding: 20px
`

const Display = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', sans-serif;
    padding: 20px;
    background: #282828
`;

const Content = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 25px;
   border-radius: 10px;
   box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
   p{
    font-weight: 700;
    margin: 10px;
   }
`;

const AllContent = styled.div`
   width: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-family: 'Trebuchet MS', sans-serif;
   padding: 20px;
   background: #fcfcfc;
   border-radius: 15px
`;