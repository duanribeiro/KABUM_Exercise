import React from "react";
import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm
} from "react-crud-table";
import api from '../../plugins/axios'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./styles.scss"


export default function ClientsTable() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();

  const service = {
    fetchItems: () => {
      return Promise.resolve(getClients());
    },

    create: client => {
      createClient(client)
      return Promise.resolve(getClients());
    },

    update: client => {
      updateClient(client)
      return Promise.resolve(getClients());
    },

    delete: client => {
      deleteClient(client)
      return Promise.resolve(getClients());
    }
  };

  function getClients() {
    return api.get(`${process.env.REACT_APP_BACKEND_API}/clients`).then(response => response.data)
  }

  function createClient(client) {
    return api.post(`${process.env.REACT_APP_BACKEND_API}/clients`, {
        birthday: client.birthday,
        cpf: client.cpf,
        name: client.name,
        phone: client.phone,
        rg: client.rg
      })
      .then(response => {
        response.data
      })
      .catch(err => {
        console.log(err.request.responseText)
        setErrorMessage(err.request.responseText)
        setOpenSnackbar(true);
      })
  }

  function updateClient(client) {
    return api.put(`${process.env.REACT_APP_BACKEND_API}/clients/${client.id}`, {
        birthday: client.birthday,
        cpf: client.cpf,
        name: client.name,
        phone: client.phone,
        rg: client.rg
      })
      .then(response => {
        response.data
      })
      .catch(err => {
        console.log(err.request.responseText)
        setErrorMessage(err.request.responseText)
        setOpenSnackbar(true);
      })
  }

  function deleteClient(client) {
    return api.delete(`${process.env.REACT_APP_BACKEND_API}/clients/${client.id}`)
      .then(response => {
        response.data
      })
      .catch(err => {
        console.log(err.request.responseText)
        setErrorMessage(err.request.responseText)
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
      <CRUDTable
        caption="Clientes"
        fetchItems={payload => service.fetchItems(payload)}
      >
        <Fields>
          <Field name="name" label="Nome" />
          <Field name="birthday" label="Data Nascimento"/>
          <Field name="cpf" label="CPF"/>
          <Field name="rg" label="RG"/>
          <Field name="phone" label="Telefone"/>
        </Fields>

        <CreateForm
          title="Adicionar Cliente"
          trigger="Adicionar Cliente"
          onSubmit={client => service.create(client)}
          submitText="Adicionar"
        />

        <UpdateForm
          title="Atualizar Cliente"
          trigger="Update"
          onSubmit={client => service.update(client)}
          submitText="Atualizar"
        />

        <DeleteForm
          title="Deletar Cliente"
          trigger="Delete"
          onSubmit={client => service.delete(client)}
          submitText="Delete"
        />
      </CRUDTable>

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
  )
}
