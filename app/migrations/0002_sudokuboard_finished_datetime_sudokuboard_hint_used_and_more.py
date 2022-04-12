# Generated by Django 4.0.3 on 2022-04-11 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sudokuboard',
            name='finished_datetime',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='sudokuboard',
            name='hint_used',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='sudokuboard',
            name='solution_string',
            field=models.CharField(default='', max_length=82),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='sudokuboard',
            name='started_datetime',
            field=models.DateTimeField(auto_now=True),
        ),
    ]