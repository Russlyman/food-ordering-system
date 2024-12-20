from . import views
from django.urls import path

urlpatterns = [
    path('', 
        views.menu_list, name='home'),
]
