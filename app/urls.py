from rest_framework.routers import DefaultRouter
from app.views import PuzzleViewSet, UserViewSet


r = DefaultRouter()
r.register(r'puzzle', PuzzleViewSet, basename='puzzle')
r.register(r'user', UserViewSet, basename="user")

urlpatterns = r.urls
