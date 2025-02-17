from django.urls import path
from . import views
from .views import test_api

urlpatterns = [  
    path('test/', test_api),
]
