from django.shortcuts import render
from django.http import HttpResponse
from .models import MenuItem

def menu_list(request):
    items = MenuItem.objects.all()
    return render(request, 'menuList.html', {'items': items})


def home(request):
    return HttpResponse("<h1>Welcome to KitchenEtte!</h1>")

