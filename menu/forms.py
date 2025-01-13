from django import forms
from .models import ItemOrder, Order

class QuantityForm(forms.ModelForm):
    class Meta:
        model = ItemOrder
        fields = ('quantity',)

class BasketForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ('order_type', 'requirements')