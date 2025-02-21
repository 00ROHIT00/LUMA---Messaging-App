from django.urls import path
from . import views
from .views import *


urlpatterns = [  
    path("register/", register_view, name="register_user"),
    path("login/", login_view, name="login"),
    path("csrf/", get_csrf_token, name="get_csrf"),
]
