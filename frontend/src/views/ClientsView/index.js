import React from 'react'
import Grid from '@mui/material/Grid';
import ClientsTable from '../../components/ClientsTable'

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
        <ClientsTable/>
      </Grid>
    </>
  )
}
