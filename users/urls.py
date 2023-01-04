from django.urls import path, include

urlpatterns = [
    path('api/user/', include('drf_user.urls')),
]