from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import viewsets
from .serializer import EventSerializer, ImageSerializer, MonthsSerializer
from .models import Event, EventsHistory, HoursResult, Image, Months
from datetime import datetime


month_list_UA = {
        '1': 'January',
        '2': 'February',
        '3': 'March',
        '4': 'April',
        '5': 'May',
        '6': 'June',
        '7': 'July',
        '8': 'August',
        '9': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all().order_by('-date')
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getEventsHistory(request):
    events = EventsHistory.objects.all().order_by('-date')
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)    

@api_view(['GET'])
def getEvent(request, pk):
    event = Event.objects.get(id=pk)
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getEventHistory(request, pk):
    event = EventsHistory.objects.get(id=pk)
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


@api_view(['DELETE'])
def deleteAll(request):
    events = Event.objects.all()
    events.delete()
    return Response('Events were deleted')

@api_view(['GET'])
def getResults(request):
    events = Event.objects.all()
    result = HoursResult.objects.get(id=34) 
    for h in events:
        result.date = month_list_UA[str(h.date)[5:7]]   
        result.hours += h.hours
        result.minutes += h.minutes
        if result.minutes >= 60:
            result.hours += 1
            result.minutes -= 60
        result.visits += h.visits
        result.publications += h.publications
        result.films += h.films 
    serializer = EventSerializer(result, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getRecordedMonthResults(request):
    month_result = Months.objects.create()
    events = Event.objects.all()
    for ev in events:
        eventsHistory = EventsHistory.objects.create()
        eventsHistory.date = ev.date
        eventsHistory.event = ev.event
        eventsHistory.hours = ev.hours
        eventsHistory.minutes = ev.minutes
        eventsHistory.visits = ev.visits
        eventsHistory.publications = ev.publications
        eventsHistory.films = ev.films
        eventsHistory.save()

        month_result.date = str(f'{str(ev.date)[0:4]} {month_list_UA[str(ev.date)[5:7]]}')
        month_result.hours += ev.hours
        month_result.minutes += ev.minutes
        if month_result.minutes >= 60:
            month_result.hours += 1
            month_result.minutes -= 60
        month_result.visits += ev.visits
        month_result.publications += ev.publications
        month_result.films += ev.films
    month_result.save()
    serializer = EventSerializer(month_result, many=False)
    return Response(serializer.data) 

@api_view(['DELETE'])
def deleteMonthResult(request):
    events = Months.objects.all()
    history = EventsHistory.objects.all()
    events.delete()
    history.delete()
    return Response('Events were deleted')
    

@api_view(['GET'])
def getMonthsResults(request):
    results = Months.objects.all()
    serializer = MonthsSerializer(results, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getImages(request):
    img = Image.objects.all()
    serializer = ImageSerializer(img, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getImage(request, pk):
    img = Image.objects.get(id=pk)
    serializer = ImageSerializer(img, many=False)
    return Response(serializer.data)