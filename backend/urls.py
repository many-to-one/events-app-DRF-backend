from django.urls import path
from .views import *

urlpatterns = [
    path('events/', getEvents, name='events'),
    path('events/<str:pk>/', getEvent, name='event'),
    path('events/<str:pk>/update/', updateEvent, name='update-event'),
    path('events/<str:pk>/delete/', deleteEvent, name='delete-event'),
]