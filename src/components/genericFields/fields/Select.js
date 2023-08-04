import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./Fields.module.css";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: "15px",
    display: "grid",
    gridTemplateColumns: " 100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Selects({ label, selected, onChange }) {
  const classes = useStyles();
  const { FetchData, data, load } = GeneralFetch({});

  useEffect(() => {
    (async () => {
      await FetchData(null, "countries/only", "GET", false, "countries");
    })();
  }, []);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selected}
          onChange={onChange}
        >
          <MenuItem value="all">
            <em>All countries</em>
          </MenuItem>
          {data?.map((val, id) => {
            return (
              <MenuItem key={id} value={val.name}>
                {val.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
