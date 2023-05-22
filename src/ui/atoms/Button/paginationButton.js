import React from "react";
import { Button } from "@mui/material";
import styles from "./styles";

const PaginationButton = ({ handlerFunction, variant, value}) => {
    return (
        <Button onClick={handlerFunction} sx={ styles.pagination } color="warning" variant={variant}>{value}</Button>
    );
}

export default PaginationButton;