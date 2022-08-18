import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from '../components/Posts/Posts';
import Form from '../components/Form/Form';
import visions from '../images/visions.png'
import useStyles from './styles';

// Actions
import { getPosts, fetchPosts} from '../slices/postsSlice.js';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  },[dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar}position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Bucket List</Typography>
        <img className={classes.image} src={visions} alt='visions' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>

      </Grow>
    </Container>
  );
}

export default App;