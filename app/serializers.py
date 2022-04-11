from rest_framework.serializers import ModelSerializer
from app.models import SudokuBoard
from django.contrib.auth.models import User


class SudokuBoardSerializer(ModelSerializer):
    class Meta:
        model = SudokuBoard
        fields = "__all__"


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "last_login"]


