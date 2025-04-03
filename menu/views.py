from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu

from itertools import groupby
from collections import defaultdict

def menu_view(request):
    items = Menu.objects.all()
    menu_items = defaultdict(list)
    for item in items:
        menu_items[item.category].append(item)
    return render(request, 'menu.html', {'menu_items': dict(menu_items)})



def home(request):
    return HttpResponse("<h1>Welcome to KitchenEtte!</h1>")

