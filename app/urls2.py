from rest_framework.routers import DefaultRouter
from app.views import PuzzleViewSet

r = DefaultRouter()
r.register(r'puzzle', PuzzleViewSet, basename='puzzle')

urlpatterns = r.urls
