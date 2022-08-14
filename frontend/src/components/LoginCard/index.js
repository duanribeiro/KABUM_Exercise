import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from "axios"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { TokenContext } from '../../App'
import { useNavigate } from 'react-router-dom';


export default function LoginCard() {
  const [token, setToken] = useContext(TokenContext);
  const history  = useNavigate();

  const [username, setUsername] = React.useState('admin')
  const [password, setPassword] = React.useState('admin')
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();

  const login = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_API}/login`, {
      username,
      password
    })
    .then(response => {
      setToken(response.data.token)
      history("/clients")
    })
    .catch(err => {
      setErrorMessage(err.message)
      setOpenSnackbar(true);
    })
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Typography color="text.secondary" gutterBottom>
                  Digite suas credenciais
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  id="outlined-username"
                  label="Usuário"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  id="outlined-password"
                  label="Senha"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button
                variant='contained'
                onClick={login}
              >
                login
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}