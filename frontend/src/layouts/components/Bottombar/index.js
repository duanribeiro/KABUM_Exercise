import React from 'react'
import Grid from '@mui/material/Grid'
import "./styles.scss"
import Typography from '@mui/material/Typography';

export default function Bottombar(props) {
  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };

  return (
    <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography align="center" variant="overline" gutterBottom component="div" style={{"padding": "5px 0px 0px 0px"}}>
            Bugs and suggestions mail me on <Mailto email="DUAN.RIBEIRO@HOTMAIL.COM" subject="Bugs and suggestions" body="">
               duan.ribeiro@hotmail.com
            </Mailto>
          </Typography>
        </Grid>
    </>
  )
}
