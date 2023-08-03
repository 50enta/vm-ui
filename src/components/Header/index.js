import { Avatar, Box, ButtonBase } from '@mui/material';
import LogoSection from './LogoSection/LogoSection';
import SearchSection from './SearchSection/Search';
import ProfileSection from './ProfileSection/Perfil';
import { Menu } from '@material-ui/icons';

function Header({ setShowMenu, showMenu }) {


    return (
        <>
            <Box sx={{ width: 200, display: { xs: 'none', md: 'block' } }}>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>
            <Box sx={{ width: 50, display: { xs: 'block', md: 'none' } }}>
                <Box component="span" sx={{ display: { xs: 'block', md: 'none' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {!showMenu ?
                    <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}
                        onClick={() => setShowMenu(true)}
                    >
                        <Avatar
                            sx={{
                                borderRadius: '5px',
                                height: '36px',
                                width: '36px',
                                backgroundColor: 'white',
                                color: '#00559A',
                                '&:hover': {
                                    backgroundColor: '#374A67',
                                    color: 'white',
                                    transition: '0.5s'
                                }
                            }}
                        >
                            <Menu stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ButtonBase> : null
                }
            </Box>

            <Box sx={{ flexGrow: 0.1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <ProfileSection />
        </>
    );
};

export default Header;