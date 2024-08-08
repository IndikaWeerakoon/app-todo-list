
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
import {Theme, styled as materialStyled, useTheme} from "@mui/material/styles"

export interface TodosItemProps {
    id: number;
    title: string;
    status: boolean;
}

const TodosItemBox = materialStyled(Box)(({ theme }: { theme: Theme }) => ({
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: '5px',
    padding: '15px'
  }));

export function TodosItem(props: TodosItemProps): ReactElement {
    const theme = useTheme();

    const getStatus = () => {
        return props.status? "Done" : "Not Done"
    }

    return (
        <TodosItemBox display="flex" 
                    flexDirection='row' 
                    sx={{[theme.breakpoints.down('sm')]: {width: '100%'}}} 
                    width='300px' 
                    gap="25px">
            <Typography>{props.id}</Typography>
            <Typography>{props.title}</Typography>
            <Typography>{getStatus()}</Typography>
        </TodosItemBox>
    );
}