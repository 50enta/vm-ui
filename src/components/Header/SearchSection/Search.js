import React from "react";
import { Avatar, Box, ButtonBase, InputAdornment, OutlinedInput, Paper } from "@mui/material";
import { NodeSearch } from "../../../contexts/searchNodeContext";
import { useContext } from "react";
import { Tune, Search, Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        maxWidth: '80%',
        margin: 'auto'
    },
    input: {
        height: '45px',
    },
    box: {

    }
}));

const SearchSection = () => {
    const { Node } = useContext(NodeSearch)
    const [, setSeacrch] = Node
    const [showSearchInput, setShowSearchInput] = React.useState(false)

    const classes = useStyles();
    const handleChange = (event) => {
        setSeacrch(event.target.value);
    };


    return (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}
                onClick={() => setShowSearchInput(true)}
            >
                <Box sx={{ ml: 2 }}>
                    <ButtonBase sx={{ borderRadius: '12px', }}>
                        <Avatar variant="rounded" style={{ height: '30px', width: '30px', backgroundColor: 'white' }}>
                            <Search stroke={1.3} size="1.2rem" style={{ color: '#00559A' }} />
                        </Avatar>
                    </ButtonBase>
                </Box>
            </Box>
            {
                showSearchInput ?
                    <div className={classes.container}>
                        <Paper className={classes.box} sx={{ display: { xs: 'block', md: 'none' } }}>
                            <OutlinedInput
                                className={classes.input}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Search stroke={1.5} size="1.2rem" />
                                    </InputAdornment>
                                }
                                onChange={handleChange}

                                endAdornment={
                                    <InputAdornment position="end">
                                        <ButtonBase sx={{ borderRadius: '12px' }}>
                                            <Avatar variant="rounded" style={{ height: '30px', width: '30px' }}>
                                                <Close stroke={1.5} size="1.2rem" onClick={() => setShowSearchInput(false)} />
                                            </Avatar>
                                        </ButtonBase>
                                    </InputAdornment>
                                }
                                placeholder='Pesquisar'
                            />
                        </Paper>
                    </div>
                    : null
            }

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <OutlinedInput
                    style={{ borderRadius: '12px', maxHeight: '40px', minWidth: '350px', fontFamily: 'Calibri, sans-serif !important', backgroundColor: 'white' }}
                    startAdornment={
                        <InputAdornment position="start" >
                            <Search stroke={1.5} size="1.2rem" />
                        </InputAdornment>
                    }
                    onChange={handleChange}
                    placeholder='Pesquise pelo nome'
                />
            </Box>
        </>
    )
}

export default SearchSection