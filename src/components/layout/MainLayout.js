import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import styles from './Layout.module.css'
import Menu from '../menu/Menu';
import { routes } from '../../routes';
import Header from '../Header/index';
import { UserContext } from '../../contexts/userContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00559A',
    },
  },
});

function Layout() {
  const [showMenu, setShowMenu] = React.useState(true);
  const { routesList } = routes()
  const UserCont = useState({})
  const navigate = useNavigate()

  React.useEffect(() => {
    if (routesList === null || routesList === undefined) {
      navigate('/')
    }
  }, [routesList])

  return (
    <React.Fragment>
      {routesList === null ? null :
        <UserContext.Provider value={{ UserCont }}>
          <div className={styles.layout}>
            <div>
              <ThemeProvider theme={theme}>
                <AppBar style={{ background: '#5C80BC' }} color='primary' position='relative'>
                  <Toolbar>
                    <Header setShowMenu={setShowMenu} showMenu={showMenu} />
                  </Toolbar>
                </AppBar>
              </ThemeProvider>
            </div>
            <div className={styles.body}>
              <div className={showMenu ? styles.withMenu : styles.withoutMenu}>
                <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
                <Routes>
                  {
                    routesList.map((routes, index) =>
                      <Route key={index} path={routes.path} element={routes.Component}></Route>
                    )
                  }
                </Routes>
              </div>
            </div>
          </div>
        </UserContext.Provider>
      }
    </React.Fragment>
  );
}

export default Layout;