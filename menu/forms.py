from django import forms
from .models import ItemOrder

class QuantityForm(forms.ModelForm):
    class Meta:
        model = ItemOrder
        fields = ('quantity',)