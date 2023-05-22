import React from "react";
import { Box } from "@mui/material"; 
import PaginationButton from "../../atoms/Button/paginationButton";
import styles from "./styles";

const Pagination = ({ hasNext, hasPrev, getInfo, goNext, goPrev }) => {
    return (
        <Box sx={ styles }>
            { hasPrev &&  <PaginationButton handlerFunction={() => getInfo(process.env.REACT_APP_BASE_URL)} variant={'contained'} value={'<<'} />}
            { hasPrev && <PaginationButton handlerFunction={goPrev} variant="outlined" value={'<'} />}
            { hasNext && <PaginationButton handlerFunction={goNext} variant="outlined" value={'>'} />}
        </Box>
    );
}

export default Pagination;