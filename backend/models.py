from django.db import models


class Event(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    event = models.TextField(
        null=True,
        max_length=500,
    )
    hours = models.IntegerField(
        default=0,
    )
    minutes = models.IntegerField(
        default=0,
    )
    visits = models.IntegerField(
        default=0,
    )
    publications = models.IntegerField(
        default=0,
    )
    films = models.IntegerField(
        default=0,
    )
    studies = models.IntegerField(
        default=0,
    )

    def __str__(self) -> str:
        return self.date