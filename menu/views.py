from django.shortcuts import render
from django.db.models import Count
from .models import Category

# Create your views here.
def menu_list(request):
    # Gets all categories that have items. gt = greater than
    categories = Category.objects.annotate(num_items=Count('items')).filter(num_items__gt=0)

    return render(
        request,
        "menu/menu_list.html",
        {"categories": categories},
    )