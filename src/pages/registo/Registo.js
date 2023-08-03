import React, { useState } from "react";
import Form from "../../components/form/Form";
import styles from './Registo.module.css'
import { app } from '../../utils/variables/app'
import { Divider, Paper } from "@mui/material";

function Registo() {

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.form}>
                    <Paper elevation={3} className={styles.paper}>
                        <div style={{ textAlign: 'center', fontSize: '22px' }}> Registo</div>
                        <Divider style={{ margin: '5px 0' }} />
                        <Form objects={app}  />
                    </Paper>
                </div>
            </div>
        </div>
    );
};

export default Registo;
