from rest_framework import status
from rest_framework.test import APITestCase
from django.urls import reverse

class UserTest(APITestCase):
    # endpoints needed
    register_url = "/api/users/register/"
    activate_url = "/api/users/user/"
    login_url = "/api/users/login/"
    
    # user infofmation
    user_data = {
        "username": "test_user", 
        "email": "test@example.com", 
        "password": "verysecret"
    }
    login_data = {
        "email": "test@example.com", 
        "password": "verysecret"
    }

    def tests(self):

        # register
        response = self.client.post(self.register_url, self.user_data, format="json")
        # expected response 
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)

        # login
        response = self.client.post(self.login_url, self.login_data, format="json")
        # expected response 
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

        # user info
        response = self.client.get(self.activate_url, format="json")
        # expected response 
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)
        resp = {
            "id": 1,
            "username": "test_user",
            "email": "test@example.com"
        }
        self.assertEqual(response.data, resp)