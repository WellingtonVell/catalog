import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box, CssBaseline, Drawer, Toolbar, Typography } from '@mui/material';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,    
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,

    }),
    marginRight: drawerWidth,
    justifyContent: 'center',    
  }),
}));

export default function DrawerAdm() {
  const [open] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }} paddingBottom={5}>      
      <CssBaseline />      
      <AppBar position="fixed" open={open} style={{background: 'rgb(49, 199, 199)'}}>
        <Toolbar>
          <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} color={'rgb(243, 245, 131)'} component="div" align='center'>
            ADMINNNNN
          </Typography>
        </Toolbar>
      </AppBar>     
      <Drawer
        sx={{
          paddingY: 5,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}>
      </Drawer>
    </Box>
  );
}
