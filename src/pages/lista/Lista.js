import React, { useEffect, useState } from "react";
import styles from "./Lista.module.css";
import BasicTable from "../../components/table/Tabela";
import GenericFields from "../../components/genericFields/GenericFields";
import { GeneralFetch } from "../../Api/generalFetch/generalFetch";

function Lista() {
  const [selected, setSelected] = useState("");
  const { FetchData, data, load } = GeneralFetch({});

  function onChange(e) {
    setSelected(e.target.value);
  }

  useEffect(() => {
    (async () => {
      await FetchData(null, 'countries', "GET", true, "countries");
    })();
  }, []);

  return (
    <div className={styles.container}>
      <GenericFields
        setSelected={setSelected}
        selected={selected}
        onChange={onChange}
        label="Country"
        type="select"
      />
      <div className={styles.tab}>
        <BasicTable data={data} selected={selected} />
      </div>
    </div>
  );
}

export default Lista;
