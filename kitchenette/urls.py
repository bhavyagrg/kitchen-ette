from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from menu.views import home  
urlpatterns = [
    path("admin/", admin.site.urls),
    path("menu/", include("menu.urls")), 
    path("", home, name="home"),  

    path('accounts/', include('allauth.urls'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
