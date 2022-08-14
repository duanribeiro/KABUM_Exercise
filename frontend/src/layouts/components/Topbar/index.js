import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import "./styles.scss"

export default function Topbar(props) {

  return (
    <>
      <AppBar id="topbar">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link to='/'>
              <Button color="inherit">Market Price</Button>
            </Link>
            {/* <Link to='/engraving_calculator'>
              <Button color="inherit">Engraving Calculator</Button>
            </Link> */}
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}
