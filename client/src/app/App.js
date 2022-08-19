import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { createTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import Navbar from '../components/Navbar/Navbar';
import useStyles from './styles';

// Actions
import {fetchPosts} from '../slices/postsSlice.js';


let theme = responsiveFontSizes(createTheme());



const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(fetchPosts());
  },[currentId, dispatch])

  return (
    <Container maxWidth="lg" >
      <Navbar />
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>
  );
}

export default App;