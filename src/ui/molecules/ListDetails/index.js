import React from "react";
import { Box, Typography } from "@mui/material";
import { formatNumber, capitalizeFirstLetter } from "../../../helpers";
import Text from "../../atoms/Text";
import styles from "./styles";

const ListDetails = ({ diameter, climate, gravity, population }) => {

    return (
        <Box sx={ styles.container }>
            <Text value="Diameter: " variant="subtitle1" styles={ styles.title } />
            <Text value={formatNumber(diameter)} variant="body2" />
            <Text value="Climate: " variant="subtitle1" styles={ styles.title } />
            <Text value={capitalizeFirstLetter(climate)} variant="body2" />
            <Text value="Gravity: " variant="subtitle1" styles={ styles.title } />
            <Text value={gravity} variant="body2" />
            <Text value="Population: " variant="subtitle1" styles={ styles.title } />
            <Text value={formatNumber(population)} variant="body2" />
        </Box>
    );

}

export default ListDetails;