from django.test import TestCase
from backend.models import Event


class EventTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        Event.objects.create(
            date="2022/12/10",
            hours=1,
            minutes=1,
            visits=1,
            publications=1,
            films=1,
            studies=1
        )

    def test_string(self):
        event = Event.objects.get(id=1)
        expected_str = f'Date: {event.date}'
        self.assertEqual(str(event), expected_str)