import React from "react";
import { Button } from "@mui/material";

const ClearButton = ({resetFilterValue}) => {
    return (
        <Button variant="contained" color="warning" onClick={resetFilterValue} >CLEAR</Button>
    );
}

export default ClearButton;