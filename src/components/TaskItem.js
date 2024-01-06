import React , { useState }from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import ViewTask from './ViewTask';


const TaskItem = () => {
    return (
        <TaskDetails>
            <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Description>
            <Actions>
                <Button variant='contained' size='large' color='success' href='/viewtask'>
                    <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button variant='contained' size='large' color='secondary' href='/Edit'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button variant='contained' size='large' color='error' onClick={()=>{alert("Task Deleted Successfully! ")}}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Actions>
        </TaskDetails>
    )
}

export default TaskItem;

const TaskDetails = styled.div`
    display: flex;
    font-family: 'Trebuchet MS', sans-serif;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; 
`;

const Description = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center
`;

const Actions = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center
`;