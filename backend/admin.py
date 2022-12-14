from django.contrib import admin
from backend.models import Event
from backend.models import HoursResult


class HoursResultAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'hours', 
        'minutes',
        'visits',
        'publications',
        'films',
        )

admin.site.register(Event)
admin.site.register(HoursResult, HoursResultAdmin)
