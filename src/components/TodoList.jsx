import React, { useState } from 'react';
import { Box, Button, List, Paper, Stack } from '@mui/material';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ tasks, updateTask, deleteTask, toggleTask }) => {

    const [filter, setFilter] = useState('active');

    const onShowDeleted = () => {
        setFilter('deleted');
    }

    const onShowAll = () => {
        setFilter('all');
    }

    const onShowActive = () => {
        setFilter('active');
    }

    const onShowCompleted = () => {
        setFilter('completed');
    }

    return (
         <Paper
            square={true}
            sx={{ marginTop: 2 }}
         >
            <List>
                {tasks.map((task) => {
                    if ((filter === 'active' && !task.delete)
                        || (filter === 'deleted' && task.delete)
                        || (filter === 'completed' && task.done)
                        || (filter === 'all')) {
                    return (
                    <TodoListItem
                        key={task.id}
                        id={task.id}
                        done={task.done}
                        description={task.description}
                        updateTask={updateTask}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask} 
                        />
                    )
                 }
                })
                }
            </List>
            <Box sx={{ padding: 1 }}>
                <Stack direction="row" justifyContent="center">
                    <Button
                        onClick={onShowAll}
                        variant={filter === 'all' ? 'outlined' : 'text'}
                    >
                        All
                    </Button>
                    <Button
                        onClick={onShowActive}
                        variant={filter === 'active' ? 'outlined' : 'text'}
                    >
                        Active
                    </Button>
                    <Button 
                        onClick={onShowDeleted}
                        variant={filter === 'deleted' ? 'outlined' : 'text'}
                    >
                        Deleted
                    </Button>
                    <Button 
                        onClick={onShowCompleted}
                        variant={filter === 'completed' ? 'outlined' : 'text'}
                    >
                        Completed
                    </Button>
                </Stack>
            </Box>
         </Paper>       
    )
}    