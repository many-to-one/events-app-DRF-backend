# Generated by Django 4.1.4 on 2022-12-28 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='first_name',
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AddField(
            model_name='newuser',
            name='user_name',
            field=models.CharField(max_length=150, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='is_active',
            field=models.BooleanField(default=False),
        ),
    ]
