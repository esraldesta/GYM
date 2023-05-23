from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from .serializers import UserSerializer

User = get_user_model()
class HomeView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()
    serializer_class = UserSerializer