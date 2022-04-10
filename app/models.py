from django.db import models
from django.contrib.auth.models import User


class SudokuCell(models.Model):
    value = models.IntegerField()
    row = models.IntegerField()
    column = models.IntegerField()
    square = models.IntegerField()
    cell_id = models.CharField(max_length=2)
    possibilities = models.CharField(max_length=10, default="123456789")


class SolutionStep(models.Model):
    cell = models.ForeignKey(SudokuCell, on_delete=models.CASCADE, related_name="steps")
    value = models.IntegerField()
    hint_used = models.BooleanField()


class SudokuBoard(models.Model):
    cells = models.ManyToManyField(SudokuCell, related_name="boards")
    steps = models.ManyToManyField(SolutionStep, related_name="boards")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="boards", blank=True, null=True)
    board_string = models.CharField(max_length=82)
