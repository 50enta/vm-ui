import { TableFooter, TablePagination, TableRow } from "@mui/material";

export default function TabFooter({ data, handleChangePage, handleChangeRowsPerPage, TablePaginationActions, copy, rowsPerPage, page }) {

    return (
        <TableFooter>
            {data.headers &&
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        count={copy?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        labelRowsPerPage='Rows'
                        SelectProps={{
                            inputProps: { 'aria-label': 'rows per page' },
                            native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            }
        </TableFooter>
    )
}