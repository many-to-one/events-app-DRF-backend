from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import viewsets
from .serializer import EventSerializer
from .models import Event, HoursResult


@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all().order_by('-date')
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getEvent(request, pk):
    event = Event.objects.get(id=pk)
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createEvent(request):
    data = request.data
    event = Event.objects.create(
        # date=data['date'],
        event=data['event'],
        hours=data['hours'],
        minutes=data['minutes'],
        visits=data['visits'],
        publications=data['publications'],
        films=data['films'],
    )
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)    

@api_view(['PUT'])
def updateEvent(request, pk):
    data = request.data
    event = Event.objects.get(id=pk)
    serializer = EventSerializer(instance=event, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteEvent(request, pk):
    data = request.data
    event = Event.objects.get(id=pk)
    event.delete()
    return Response('Event was deleted')

@api_view(['GET'])
def getResults(request):
    hours = 0
    minutes = 0
    visits = 0
    publications = 0
    films = 0
    events = Event.objects.all()
    for h in events:
        hours += h.hours
        minutes += h.minutes
        visits += h.visits
        publications += h.publications
        films += h.films

    result = HoursResult.objects.get(id=34)
    result.hours += hours
    result.minutes += minutes
    result.visits += visits
    result.publications += publications
    result.films += films
    serializer = EventSerializer(result, many=False)
    return Response(serializer.data)