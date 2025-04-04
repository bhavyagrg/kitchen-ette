from django.urls import path
from .views import menu_view
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('', login_required(menu_view), name='menu'),
    # path("", menu_view, name="menu"),  
]
