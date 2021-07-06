import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 8
  },
}));

export default function InfoPanel() {


  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covidtracking.com/v1/states/current.json");
      let data = await response.json();
      console.log(data);
      setGlobalData(data[0]);
      console.log(data[0]);
    }
    getData()
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((v,i) => {
          return (
            <Grid key={i} item xs={12} sm={4}>
              <Paper  className={classes.paper} elevation={3}>
                <h1>{v}</h1>
                <h1>{globalData[v]}</h1>
              </Paper>
            </Grid>
          );
        })}



      </Grid>
    </div>
  );
}
