from rest_framework.serializers import ModelSerializer
from app.models import *
#
#
# class SudokuCellSerializer(ModelSerializer):
#     class Meta:
#         model = SudokuCell
#         fields = "__all__"
#
#
# class SolutionStepSerializer(ModelSerializer):
#     class Meta:
#         model = SolutionStep
#         fields = "__all__"
#     cell = SudokuCellSerializer()


class SudokuBoardSerializer(ModelSerializer):
    class Meta:
        model = SudokuBoard
        fields = "__all__"

