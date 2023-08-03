import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'
import { routes } from '../../routes';
import CloseIcon from '@mui/icons-material/Close';

function Menu({ setShowMenu, showMenu }) {
    const { routesList } = routes()
    let menuItem

    if (!sessionStorage.getItem('menuItem')) {
        menuItem = "Início"
    } else {
        menuItem = sessionStorage.getItem('menuItem');
    }

    window.onclose = function () {
        sessionStorage.removeItem("menuItem")
    };

    return (
        <ul className={showMenu ? styles.sidebar : styles.sidebarClosed}>
            <li className={styles.closeIConn} >
                <CloseIcon style={{
                    width: '34px',
                    height: '34px',
                    fontSize: '16px',
                    background: 'rgba(255, 255, 255, 0.800)',
                    borderRadius: '5px',
                    margin: '7px 7px 15px 7px',
                    cursor: 'pointer',
                }}
                    sx={{
                        '&:hover': {
                            color: '#374A67',
                            transition: '0.5s'
                        }
                    }}
                    onClick={() => setShowMenu(false)}
                />
            </li>
            {
                routesList.map((routes, index) => {
                    return (
                        <li key={index} style={{ listStyle: 'none' }} onClick={() => { sessionStorage.setItem('menuItem', routes.label) }}>
                            <Link to={routes.path}
                                style={{ textDecoration: 'none' }}
                                className={routes.label == menuItem ? styles.itemClicado : styles.item}
                            >
                                <span className={styles.icon}>{routes.icon}</span>
                                <p> {routes.label} </p>
                            </Link>
                        </li>
                    )
                }
                )
            }
        </ul>
    );
}

export default Menu