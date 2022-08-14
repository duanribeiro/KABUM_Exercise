import React from 'react'
import LoginCard from '../../components/LoginCard'
import Grid from '@mui/material/Grid';
import "./styles.scss"

export default function ClientsView() {
 
  return (
    <>
      <Grid
        className='maingrid'
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <LoginCard/>
      </Grid>
    </>
  )
}
