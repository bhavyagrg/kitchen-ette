from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu

from itertools import groupby

def menu_view(request):
    menu_items = Menu.objects.all().order_by('category')
    grouped_menu = {k: list(v) for k, v in groupby(menu_items, key=lambda x: x.category)}
    context = {
        'menu_items': grouped_menu,
    }
    return render(request, 'menu.html', context)



def home(request):
    return HttpResponse("<h1>Welcome to KitchenEtte!</h1>")

