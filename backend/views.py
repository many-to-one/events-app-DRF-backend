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
    events = Event.objects.all()
    result = HoursResult.objects.get(id=34) # Create mounth and find HoursResult by month, then save
    for h in events:                        # and create a new HoursResul with a new one month.
        result.hours += h.hours
        result.minutes += h.minutes
        if result.minutes >= 60:
            result.hours += 1
            result.minutes -= 60
        result.visits += h.visits
        result.publications += h.publications
        result.films += h.films
    # result.save()   
    serializer = EventSerializer(result, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteAll(request):
    events = Event.objects.all()
    events.delete()
    return Response('Events were deleted')
