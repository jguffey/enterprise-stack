from django.contrib import admin
from django.urls import path

from product.users import views as user_views

urlpatterns = [
    path('', user_views.index),
]
