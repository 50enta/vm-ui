import TableHead from "@mui/material/TableHead";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { UserContext } from "../../contexts/userContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { NodeSearch } from "../../contexts/searchNodeContext";
import Nothing2Show from "./nothing2show";
// import ReturnValue from '../../utils/tableUtils/returnRowValue';
import TabFooter from "./tableFooter";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    fontFamily: "Calibri, sans-serif !important",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = () => {
    onPageChange(0);
  };

  const handleBackButtonClick = () => {
    onPageChange(page - 1);
  };

  const handleNextButtonClick = () => {
    onPageChange(page + 1);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    textTransform: "none ! important",
  },
});

export default function BasicTable({ data, selected }) {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [copy, setCopy] = useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    setCopy(data.dados);
  }, [data]);

  useEffect(() => {
    let filtered = [];
    if (selected == "all") {
      setCopy(data.dados);
    } else {
      data?.dados?.map((val) => {
        if (val.country == selected) {
          filtered.push(val);
        }
      });

      if (filtered.length > 0) setCopy(filtered);
    }
  }, [selected]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="custom pagination table"
        size="small"
      >
        <>
          <TableHead>
            <TableRow>
              {data?.headers != 0 &&
                data?.headers?.map((h) => (
                  <TableCell
                    style={{ fontWeight: "bold" }}
                    align="center"
                    key={h.key}
                  >
                    {h.key}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? copy?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : copy
            )?.map((row, id) => (
              <TableRow key={id}>
                {data.headers?.map((h) => (
                  <TableCell
                    padding="none"
                    align="center"
                    style={{ fontSize: "14px", padding: "8.5px" }}
                  >
                    {row[h.value]}
                  </TableCell>
                ))}
              </TableRow>
            ))}

            {!data.headers && <Nothing2Show />}
          </TableBody>
          <TabFooter
            data={data}
            TablePaginationActions={TablePaginationActions}
            copy={copy}
            handleChangePage={handleChangePage}
            page={page}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
          />
        </>
      </Table>
    </TableContainer>
  );
}
