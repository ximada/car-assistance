import React from 'react';
import TextField from 'material-ui/TextField'
import { orange500, blue500 } from 'material-ui/styles/colors';

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};
const Form = () => (
    <div>
        <h2>Complete el siguiente Formulario</h2>
        <TextField
            hintText="Nombre(s)"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Apellidos"
            hintStyle={styles.errorStyle}
        /><br/>
        <TextField
            hintText="Marca de automovil"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Modelo de automovil"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Color de automovil"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Placas"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Color de automovil"
            hintStyle={styles.errorStyle}
        /><br />
        <TextField
            hintText="Observaciones "
            multiLine={true}
            hintStyle={styles.errorStyle}
        /><br />

    </div>
);

export default Form;