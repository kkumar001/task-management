import React from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TaskItem from './TaskItem';

const Home = () => {

    const arr = [1, 2, 3, 4, 5];
    return (
        <HomePage>
            <Nav>
                <Link to='/'>
                    <img src={logo} height='100px' width='400px' alt='logo'/>
                </Link>
            </Nav>
            <Title>
                TASK MANAGEMENT
            </Title>
            <AddTask>
              <Button variant="contained" href='/addtask' style={{backgroundColor: '#282828'}} size='large'>
                ADD TASK
              </Button>
            </AddTask>
            <TaskDisplay>
              <Top>
                <Des>
                <h3> Description</h3>
                </Des>
                <Act>
                <h3> Actions</h3>
                </Act>
              </Top>
              <Items>
                {arr.map((i)=>{
                    return(
                        <TaskItem id={i}/>
                    )
                })}
              </Items>
            </TaskDisplay>
        </HomePage>
    )
}

export default Home;

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
   // width: 100%;
`

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
const AddTask = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const TaskDisplay = styled.div`
    
`;

const Items = styled.div`
    
`;

const Top = styled.div`
    display: flex;
    font-family: 'Trebuchet MS', sans-serif;
`;

const Des = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`;

const Act = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`;