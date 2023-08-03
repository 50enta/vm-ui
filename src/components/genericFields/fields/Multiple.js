import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";
import styles from './Fields.module.css'

export default function Selects({ label, selected, setSelected, infos }) {
  const { FetchData, data } = GeneralFetch()

  useEffect(() => {
    (async () => {
      await FetchData(null, 'getServers', 'GET', false, 'Servers')
    })()
  }, [])

  if (data.length > 0) {
    data.forEach(obj => {
      obj['label'] = obj['nome']
      obj['value'] = obj['id']
    });
  }


  return (
    <React.Fragment>
      {data && infos?.acesso == 'normal' &&
        <div className={styles.component}>
          <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <MultiSelect
              options={data}
              value={selected}
              className={styles.select}
              onChange={setSelected}
            />
          </div>
        </div>
      }
    </React.Fragment>
  );
};