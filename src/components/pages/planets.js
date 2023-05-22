import React from "react";
import { Container, Typography } from "@mui/material";
import Text from "../../ui/atoms/Text";
import styles from "./styles";
import PlanetList from "../templates/planetLists";

const Planets = () => {

    return (
        <Container fixed sx={ styles.container }>
            <Text value={'Qu Planets'} variant="h2" styles={ styles.title } />
            <PlanetList />
        </Container>
    );

}

export default Planets;