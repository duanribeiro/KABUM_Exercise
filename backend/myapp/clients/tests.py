from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class ClientsTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create(username='test_admin')
        self.user.set_password('test_admin')
        self.token = Token.objects.create(user=self.user)
        self.user.save()
        url = '/clients'
        data = {
            "name": "name1",
            "birthday": "2022-01-01",
            "cpf": "cpf1",
            "rg": "rg1",
            "phone": "phone1",
        }
        self.client.force_authenticate(user=self.user)
        self.client.post(url, data, format='json')

    def test_list_clients(self):
        """
        Ensure method GET list all clients
        """
        url = '/clients'
        self.client.force_authenticate(user=self.user)
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["name"], "name1")
        self.assertEqual(response.data[0]["cpf"], "cpf1")

    def test_add_clients(self):
        """
        Ensure method POST add clients
        """
        url = '/clients'
        data = {
           "name": "name2",
           "birthday": "2022-02-02",
           "cpf": "cpf2",
           "rg": "rg2",
           "phone": "phone2",
        }

        self.client.force_authenticate(user=self.user)
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        response = self.client.get(url, format='json')
        self.assertEqual(response.data[-1]["name"], "name2")
        self.assertEqual(response.data[-1]["cpf"], "cpf2")

    def test_update_client(self):
        """
        Ensure method PUT update clients
        """
        url = '/clients'
        response = self.client.get(url, format='json')
        id = response.data[0]['id']

        url = f'/clients/{id}'
        data = {
           "name": "name3",
           "birthday": "2022-03-03",
           "cpf": "cpf3",
           "rg": "rg3",
           "phone": "phone3",
        }
        self.client.force_authenticate(user=self.user)
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], "name3")
