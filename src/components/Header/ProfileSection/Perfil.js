import React from "react";
import { Avatar, Box, MenuItem, Popover } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import { GeneralFetch } from "../../../Api/generalFetch/generalFetch";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import styles from './ProfileSection.module.css'

const useStyles = makeStyles(() => ({
    box: {
        boxShadow: '0px 15px 30px rgba(0,0,0,0.1)',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: '5%',
    }
}));

const PerfilSection = () => {
    const classes = useStyles();
    const { FetchData } = GeneralFetch({})
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function Sair() {
        navigate('/')
    }

    function stringAvatar() {
        return {
            sx: {
                bgcolor: '#C5D6D8',
                color: '#3E4E50',
                cursor: 'pointer'
            },
            children: 'VS',
        };
    }

    return (
        <Box
            sx={{ ml: 2, mr: 3 }}
            className={classes.box}
        >
            <Avatar onClick={(event) => { handleClick(event) }}  {...stringAvatar('Jed Watson')} style={{ marginRight: '-300px' }} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
             
                <div className={styles.iconDiv} onClick={() => Sair()} >
                    <MenuItem style={{ margin: '7px', color: 'red', }}  > <Logout /> Sign Out</MenuItem>
                </div>
            </Popover>
        </Box>
    )
}

export default PerfilSection