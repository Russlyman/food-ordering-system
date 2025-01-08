from django.shortcuts import render, reverse
from django.db.models import Count
from .models import Category, Item, Order, ItemOrder
from .forms import QuantityForm
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import get_object_or_404

# Create your views here.
def menu_list(request):
    # Gets all categories that have items. gt = greater than
    categories = Category.objects.annotate(num_items=Count('items')).filter(num_items__gt=0)

    return render(
        request,
        "menu/menu_list.html",
        {"categories": categories, "currency_symbol": "£"},
    )

def basket_quantity(request, item_id):
    if request.method != "POST":
        return HttpResponse(status=405)
    
    # FIX: Active order should not be hard coded and should be unique for each user.
    # Get item from database.
    order = Order.objects.get(id=1)
    item = get_object_or_404(Item, id=item_id)

    # Kill invalid forms
    quantity_form = QuantityForm(data=request.POST)
    if not quantity_form.is_valid():
        return HttpResponse(status=400)

    # Update existing basket quantity if item is already in basket.
    try:
        itemorder = ItemOrder.objects.get(order=order, item=item)

        itemorder.quantity = quantity_form.cleaned_data['quantity']
        
        itemorder.save()
    # Add new basket item to the db.
    except ItemOrder.DoesNotExist:
        itemorder = quantity_form.save(commit=False)
        
        itemorder.item = item
        itemorder.order = order

        itemorder.save()

    return HttpResponseRedirect(reverse('home'))