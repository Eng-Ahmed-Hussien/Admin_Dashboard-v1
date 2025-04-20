import React from 'react';
import Navbar from '../Navbar/Navbar'
import MiniDrawer from '../MiniDrawer/MiniDrawer';
import { Outlet } from 'react-router-dom'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '../../theme';
import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function Layout() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem('currentMode') ? localStorage.getItem('currentMode') : 'light');
  // @ts-ignore
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return <>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

        <MiniDrawer open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet></Outlet>
        </Box>
      </Box>
    </ThemeProvider>
  </>
}
