import React from "react";
import { Card } from "@mui/material";
import Text from "../../atoms/Text";
import styles from "./styles";

const CardPlanet = ({handleModal, infoPlanet}) => {
    return (
        <Card onClick={handleModal} sx={ styles.card }>
            <Text styles={ styles.text } variant="h3" value={infoPlanet.name} />
        </Card>
    );
}

export default CardPlanet;