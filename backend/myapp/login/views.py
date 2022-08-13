from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['GET', 'POST'])
def login(request):
    """
    Login on page
    """
    if request.method == 'POST':
        username, password = request.data['username'], request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            token = Token.objects.filter(user=user)
            if token:
                token = token[0]
            else:
                token = Token.objects.create(user=user)
            return Response({"message": "Login Successfully", "token": token.key}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "User not found"}, status=status.HTTP_403_FORBIDDEN)
    return Response(status=status.HTTP_200_OK)


@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
@api_view(['POST'])
def logout(request):
    request.user.auth_token.delete()
    return Response(status=status.HTTP_200_OK)