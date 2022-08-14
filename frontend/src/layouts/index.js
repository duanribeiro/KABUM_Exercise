import React from 'react'
import { Topbar } from './components'
import Grid from '@mui/material/Grid'

export function BasicLayout(props) {
  const { children } = props

  return (
    <>
      <Topbar/>

      <Grid
      style={{"paddingTop": "38px"}}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
        <Grid
        item
        xs={12}
        >
          {children}
        </Grid>
      </Grid>
    </>
  )
}
