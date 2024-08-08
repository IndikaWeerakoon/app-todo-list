import { Box, Typography } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { TodosItem } from "../../components/todos-item/todos-item";
import { useAppSelector } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { todosActions } from "../../redux/todo/todo-slice";

export function TodosPage(): ReactElement {
    const todos = useAppSelector(state => state.todos.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosActions.getTodosAsync({}));
    }, [])

    return (
        <Box display="flex" 
             justifyContent="center" 
             flexDirection="column" 
             gap="20px">
            <Typography variant="h4" textAlign="center">Todo App</Typography>
            <Box display="flex" justifyContent="center" >
                {todos.map((item) => (
                    <TodosItem {...item}></TodosItem>
                ))}
            </Box>
            
        </Box>
        
    );
}