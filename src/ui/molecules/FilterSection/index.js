import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ClearButton from "../../atoms/Button/clearButton";
import SelectFilter from "../../atoms/Select";
import styles from "./styles";

const FilterSection = ({ handleFilterChange, refetchPlanets }) => {

    const [filterValue, setFilterValue] = useState('');

    const handleChangeFilter = (event) => {
        localStorage.setItem('currentFilter', event.target.value);
        setFilterValue(event.target.value);
        handleFilterChange(event.target.value);
    };

    const resetFilterValue = () => {
        setFilterValue('');
        localStorage.clear();
        handleFilterChange('');
        refetchPlanets();
    }

    useEffect(() => {
        const currentFilter = localStorage.getItem('currentFilter');
        if (currentFilter && currentFilter !== '') setFilterValue(currentFilter);
    },[]);

    return (
        <Box sx={ styles }>
            <SelectFilter filterValue={filterValue} handleChangeFilter={handleChangeFilter} />
            <ClearButton resetFilterValue={resetFilterValue} />
        </Box>
    );

}

export default FilterSection;