import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Fields.module.css'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: '15px',
        display: 'grid',
        gridTemplateColumns: ' 100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Selects({ label, selected, dados = [], onChange }) {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <FormControl variant="outlined" size='small' className={classes.formControl}>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selected}
                    onChange={onChange}
                >
                    <MenuItem value="text">
                        <em>All countries</em>
                    </MenuItem>
                    {
                        dados?.map((val, id) => {
                                return <MenuItem key={id} value={val.key}>{val.nome}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}
