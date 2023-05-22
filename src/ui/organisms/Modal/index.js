import React from "react";
import { Modal, Box, Typography, Divider } from '@mui/material'
import ListDetails from "../../molecules/ListDetails";
import styles from "./styles";
import Text from "../../atoms/Text";

const ModalDetails = ({open, handleOpen, infoDetails}) => {

    const { name, diameter, climate, gravity, population } = infoDetails;

    return (
        <Modal
            open={open}
            onClose={handleOpen}
        >
            <Box sx={ styles.container }>
                <Text variant="h4" value={name} />
                <Divider sx={ styles.divider} />
                <ListDetails diameter={diameter} climate={climate} gravity={gravity} population={population}/>
            </Box>
        </Modal>
    );
}

export default ModalDetails;