import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Button from '@mui/material/Button';

const Edit = () => {
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    const [des, setDes] = useState(text);
    return (
        <EditTask>
            <Nav>
                <Link to='/'>
                    <img src={logo} height='100px' width='400px' alt='logo' />
                </Link>
            </Nav>
            <Title>
                EDIT TASK
            </Title>
            <Details>
                <EditForm>
                    <label id='edit' style={{ fontSize: 30, margin: '20px', color: '#282828' }}>Description</label>
                    <textarea id='edit' rows={10} style={{ width: '90%' , margin: '20px', border: '2px solid #ccc', borderRadius:'10px', padding: '5px',
                              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} onChange={e => setDes(e.target.value)}>
                        {des}
                    </textarea>
                    <Button href='/' type='submit' variant='contained' style={{background: '#282828', margin: '20px'}} onClick={()=>{alert("Task Edited Successfully! ")}}>EDIT TASK</Button>
                </EditForm>
            </Details>
        </EditTask>
    )
}

export default Edit;

const EditTask = styled.div`
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
const Details = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-family: 'Trebuchet MS', sans-serif;
   padding: 20px 60px;
   background: #282828;
   height: 100%
`;

const EditForm = styled.form`
display: flex;
flex-direction: column;
//justify-content: center;
align-items: center;
background: #fcfcfc;
height: 90%;
border-radius: 100px
`;