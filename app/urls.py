from rest_framework.routers import DefaultRouter
from app.views import PuzzleViewSet, UserViewSet, PingViewSet
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from rest_framework import routers

r = DefaultRouter()
r.register(r'puzzle', PuzzleViewSet, basename='puzzle')
r.register(r'user', UserViewSet, basename="user")
r.register('ping', PingViewSet, basename="ping")


urlpatterns = [
    path('api/token/access/', TokenRefreshView.as_view(), name='token_get_access'),
    path('api/token/both/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', include(r.urls))
]
