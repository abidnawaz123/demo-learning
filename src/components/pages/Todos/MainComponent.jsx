import React, { useState } from 'react'
import { Box, Button, Grid, Input, Typography } from '@mui/material'
import { addTodo, deleteTodo, updateTodo } from '../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CheckOutlined, DeleteOutline, Edit, UpdateOutlined } from '@mui/icons-material'
const MainComponent = () => {
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const todos = useSelector(state => state.todos)

    const handleAddTask = () => {
        if (task !== "") {
            const findAlreadyAvailableTaskIndex = todos.findIndex(item => item === task);
            if (findAlreadyAvailableTaskIndex == -1) {
                dispatch(addTodo(task.trim()))
            }
            else {
                return task;
            }
        }
    }
    const handleUpdate = (item, ind) => {
        dispatch(updateTodo({ item, index: ind, newItem: 'abid' }))
    }

    const addedItemsStyle = {
        color: "white",
    }
    const mainheadingStyle = {
        textAlign: 'center',
        marginBottom: '20px',
        backgroundColor: '#1A2027'
    }
    const inputContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const inputFileStyle = {
        backgroundColor: 'lightblue',
        borderRadius: '5px'
    }
    const addedCardsStyle = {
        backgroundColor: "#1A2027",
        borderRadius: '5px',
        display: "flex",
        alignItems: 'center',
        padding: 20,
        justifyContent: 'space-between'
    }
    const deleteTodoItem = (item) => {
        dispatch(deleteTodo(item))
    }
    return (
        <>
            <div style={mainheadingStyle}>
                <Typography variant='body1' color={"white"}>
                    HEADING LEADS
                </Typography>
                <Box sx={inputContainer}>
                    <Input type='text'
                        style={inputFileStyle}
                        onChange={(event) => { setTask(event.target.value.trim()) }}
                    />
                    <Button variant='contained'
                        size='small'
                        onClick={handleAddTask}
                    >
                        add Task
                    </Button>
                </Box>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        {
                            todos.length ? todos.map((item, ind) => (
                                <>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Box style={addedCardsStyle}>
                                            <Typography key={ind}
                                                style={addedItemsStyle}>
                                                {item}
                                            </Typography>
                                            <DeleteOutline color='error'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => { deleteTodoItem(item) }}
                                            />
                                            <Edit
                                                style={{ cursor: 'pointer' }}
                                                color='primary'
                                                onClick={() => { handleUpdate(item, ind) }}
                                            />
                                        </Box>
                                    </Grid>
                                </>
                            )) : null
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default MainComponent
