import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from "./styles";

const SelectFilter = ({ filterValue, handleChangeFilter }) => {
    return (
        <Box sx={ styles }>
            <FormControl fullWidth>
                <InputLabel>Order By</InputLabel>
                <Select
                    value={filterValue}
                    label="Order by"
                    onChange={handleChangeFilter}
                >
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'diameter'}>Diameter</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectFilter;