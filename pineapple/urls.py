from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from backend import urls
# from rest_framework import routers
# from backend import views

# router = routers.DefaultRouter()
# router.register(r'events', views.EventView, 'events')

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include('backend.urls'))
]

if settings.DEBUG:
    urlpatterns += static(
            settings.MEDIA_URL,
            document_root=settings.MEDIA_ROOT,
        )
