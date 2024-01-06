import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import Button from '@mui/material/Button';

const AddTask = () => {

    const [des, setDes] = useState('');
    console.log(des);

    return (

        <AddT>
            <Nav>
                <Link to='/'>
                    <img src={logo} height='100px' width='400px' alt='logo' />
                </Link>
            </Nav>
            <Title>
                ADD TASK
            </Title>
            <Details>
                <EditForm>
                    <label id='edit' style={{ fontSize: 30, margin: '20px', color: '#282828' }}>Description</label>
                    <textarea id='edit' rows={10} style={{ width: '90%' , margin: '20px', border: '2px solid #ccc', borderRadius:'10px', padding: '5px',
                              boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} onChange={e => setDes(e.target.value)}>
                        {des}
                    </textarea>
                    <Button href='/' type='submit' variant='contained' style={{background: '#282828', margin: '20px'}} onClick={()=>{alert("Task Added Successfully! ")}}>ADD TASK</Button>
                </EditForm>
            </Details>
        </AddT>
    )
}

export default AddTask;

const AddT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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