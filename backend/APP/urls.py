from django.urls import path
from . import views
from .views import *


urlpatterns = [  
    path("register/", register_user, name="register_user"),
]
