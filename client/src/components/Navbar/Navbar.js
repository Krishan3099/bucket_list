import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { createTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import visions from '../../images/visions.png';
import useStyles from './styles';



const Navbar = () => {
  const classes = useStyles();
  let theme = responsiveFontSizes(createTheme());

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <MuiThemeProvider theme={theme}>
          <Typography className={classes.heading} variant='h3' align='center'>Bucket List</Typography>
        </MuiThemeProvider>
        
        <img className={classes.image} src={visions} alt='visions' height='60'/>
    </AppBar>
  )
}

export default Navbar