from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class LoginTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create(username='test_admin')
        self.user.set_password('test_admin')
        self.token = Token.objects.create(user=self.user)
        self.user.save()

    def test_login(self):
        """
        Ensure we can login
        """
        url = '/login'
        data = {'username': 'test_admin', 'password': 'test_admin'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logout(self):
        """
        Ensure we can logout
        """
        url = '/logout'
        self.client.force_authenticate(user=self.user)
        response = self.client.post(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        deleted_token = Token.objects.last()
        self.assertEqual(deleted_token, None)


