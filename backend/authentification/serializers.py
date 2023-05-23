from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.serializers import ModelSerializer

from django.contrib.auth import get_user_model
User = get_user_model()


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username 
        # ...

        return token
    

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"