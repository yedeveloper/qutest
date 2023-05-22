import imgBackground from '../../../assets/mainBackground.jpeg';

const styles = {
    card: {
        cursor: 'pointer', 
        margin: 1, 
        backgroundImage:`url(${imgBackground})`, 
        backgroundSize: 'cover', 
        width: '40%', 
        height: '150px', 
        display: 'flex', 
        alignItems: 'center' 
    },
    text: {
        color: 'white', 
        mb: 1.5, 
        ml: 2 
    }
}

export default styles;