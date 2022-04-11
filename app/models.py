from django.db import models
from django.contrib.auth.models import User


# class SolutionStep(models.Model):
#     cell = models.ForeignKey(SudokuCell, on_delete=models.CASCADE, related_name="steps")
#     value = models.IntegerField()
#     hint_used = models.BooleanField()


class SudokuBoard(models.Model):
    cells = models.JSONField()
    # steps = models.ManyToManyField(SolutionStep, related_name="boards")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="boards", blank=True, null=True)
    board_string = models.CharField(max_length=82)
