import { Typography } from "@mui/material";
import React from "react";

const Text = ({ value, variant, styles = {} }) => {
    return (
        <Typography variant={variant} sx={{...styles}}>
            {value}
        </Typography>
    );
}

export default Text;