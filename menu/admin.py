from django.contrib import admin
from .models import Category, Item, Order, ItemOrder

# Register your models here.

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Order)
admin.site.register(ItemOrder)
