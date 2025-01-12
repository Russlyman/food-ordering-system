from . import views
from django.urls import path

urlpatterns = [
    path("", views.menu_list, name="home"),
    path(
        "basket_quantity/<int:item_id>", views.basket_quantity, name="basket_quantity"
    ),
    path(
        "delete_item/<int:item_id>", views.delete_item, name="delete_item"
    ),
    path("basket", views.basket, name="basket"),
]
