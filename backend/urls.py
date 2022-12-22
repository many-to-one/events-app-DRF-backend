from django.urls import path
from .views import *

urlpatterns = [
    path('events/', getEvents, name='events'),
    path('events/<str:pk>/', getEvent, name='event'),
    path('event/create/', createEvent, name='create-event'),
    path('events/<str:pk>/update/', updateEvent, name='update-event'),
    path('events/<str:pk>/delete/', deleteEvent, name='delete-event'),
    path('event/delete-all/', deleteAll, name='delete-all'),
    path('results/', getResults, name='results'),
    path('month/create/', getRecordedMonthResults, name='create_month_results'),
    path('get_month_results/', getMonthsResults, name='get_month_results'),
    path('images/', getImages, name='images'),
    path('images/<str:pk>', getImage, name='image'),
]