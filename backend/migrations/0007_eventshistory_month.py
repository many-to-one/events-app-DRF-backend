# Generated by Django 4.1.4 on 2023-01-02 11:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_eventshistory_month'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventshistory',
            name='month',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.months'),
        ),
    ]