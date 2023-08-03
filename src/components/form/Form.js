import React, { useState } from 'react';
import Button from '../buttons/Button'
import GenericFields from '../genericFields/GenericFields'
import styles from './Form.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: blue,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

function Form({ objects }) {
    const [infos, setInfos] = useState({});
    const [selected, setSelected] = useState([]);

    const classes = useStyles();

    function updateInfosItem(key, value) {
        setInfos({ ...infos, [key]: value });
    }

    return (
        <React.Fragment>
            <form >
                {objects?.map((object) => {

                    return (
                        <GenericFields
                            key={object.key}
                            label={object.label}
                            type={object.valueType}
                            value={infos?.[object.key]}
                            options={object?.options}
                            selected={selected}
                            setSelected={setSelected}
                            infos={infos}
                            setInfos={setInfos}
                            onChange={(e) => {
                                updateInfosItem(object.key, e.target?.value?.replace(object.regex, object.replace));
                            }}
                        />
                    )
                })}

                <div className={styles.btn}>
                    <div className={classes.wrapper}>
                        <Button
                            label="Salvar"
                            type='reset'
                            variant="contained"
                            color="primary"
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}
export default Form