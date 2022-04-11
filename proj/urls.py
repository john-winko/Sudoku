from django.contrib import admin
from django.urls import path, include
from app.views import send_the_homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/', include("app.urls")),
    path('', send_the_homepage)
]