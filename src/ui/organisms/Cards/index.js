import React, { useState } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import ModalDetails from '../Modal';
import CardPlanet from '../../molecules/Card';

const PlanetCards = ({infoPlanet}) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <ThemeProvider theme={theme}>
            <CardPlanet handleModal={handleModal} infoPlanet={infoPlanet} />
            <ModalDetails open={isModalOpen} handleOpen={handleModal} infoDetails={infoPlanet} />
        </ThemeProvider>
    );
}

export default PlanetCards;