# Generated by Django 4.1.4 on 2022-12-29 12:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_newuser_first_name_newuser_user_name_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='newuser',
            old_name='user_name',
            new_name='username',
        ),
    ]
