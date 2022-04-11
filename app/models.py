from django.db import models
from django.contrib.auth.models import User


class SudokuBoard(models.Model):
    cells = models.JSONField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="boards", blank=True, null=True)
    board_string = models.CharField(max_length=82)
    solution_string = models.CharField(max_length=82)
    hint_used = models.BooleanField(default=False)
    started_datetime = models.DateTimeField(auto_now=True)
    finished_datetime = models.DateTimeField(null=True, blank=True)
