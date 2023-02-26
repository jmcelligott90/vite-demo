import { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const CountButton = ({count, onClick}) => {
    //const {count, onClick} = props;

    const updateCounter = () => {
        onClick();
    }

    return (
        <Button variant="outlined" endIcon={<SendIcon />}
         onClick={updateCounter}>
            count is {count}
      </Button>
    );
};

export default CountButton;