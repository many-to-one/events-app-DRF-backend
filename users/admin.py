from django.contrib import admin

from users.models import NewUser

class NewUserAdmin(admin.ModelAdmin):
    list_display = (
        'id', 
        'username', 
        )

admin.site.register(NewUser, NewUserAdmin)
