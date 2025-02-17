from django.contrib import admin
from django.urls import path, include  # Include function is needed
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('backend.APP.urls')),  
    path('', TemplateView.as_view(template_name = 'index.html')),
]
