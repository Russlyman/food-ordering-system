from django.shortcuts import render, reverse
from django.db.models import Count
from .models import Category, Item, Order, ItemOrder
from .forms import QuantityForm
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import get_object_or_404


# Create your views here.
def menu_list(request):
    # Gets all categories that have items. gt = greater than
    categories = (
        Category.objects.annotate(num_items=Count("items"))
        .filter(num_items__gt=0)
        .prefetch_related("items")
    )

    # Fetch the current order (assuming ID=1 for simplicity)
    current_order = (
        Order.objects.prefetch_related("items__item")
        .filter(id=1, user=1)
        .first()
    )

    # Build a dictionary of item quantities
    item_quantities = {}
    basket_count = 0

    if current_order:
        item_quantities = {
            item_order.item.id: item_order.quantity
            for item_order in current_order.items.all()
        }
        basket_count = sum(item_quantities.values())

    # Add a "quantity" attribute to each item in each category
    for category in categories:
        for item in category.items.all():
            item.quantity = item_quantities.get(item.id, 0)

    return render(
        request,
        "menu/menu_list.html",
        {
            "categories": categories,
            "item_quantities": item_quantities,
            "currency_symbol": "£",
            "basket_count": basket_count,
        },
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

        itemorder.quantity = quantity_form.cleaned_data["quantity"]

        # Remove items that are set to a quantity of zero.
        if itemorder.quantity == 0:
            itemorder.delete()
            return HttpResponseRedirect(reverse("home"))

        itemorder.save()
    # Add new basket item to the db.
    except ItemOrder.DoesNotExist:
        itemorder = quantity_form.save(commit=False)

        itemorder.item = item
        itemorder.order = order

        # Reject new items that have a quantity of zero.
        if itemorder.quantity == 0:
            return HttpResponse(status=400)

        itemorder.save()

    return HttpResponseRedirect(reverse("home"))


def basket(request):
    item_orders = ItemOrder.objects.filter(order_id=1).select_related("item")
    items = [
        {
            "name": item_order.item.name,
            "id": item_order.item.id,
            "quantity": item_order.quantity,
            "price": item_order.item.price
            * item_order.quantity,  # Calculate total price
        }
        for item_order in item_orders
    ]

    total = sum(item["price"] for item in items)

    return render(request, "menu/basket.html", {"items": items, "total": total, "currency_symbol": "£",})

def delete_item(request, item_id):
    item = get_object_or_404(ItemOrder, order__id=1, item__id=item_id)
    item.delete()
    return HttpResponseRedirect(reverse("basket"))