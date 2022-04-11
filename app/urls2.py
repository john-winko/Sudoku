from rest_framework.routers import DefaultRouter
from app.views import PuzzleViewSet#, CellViewSet

r = DefaultRouter()
r.register(r'puzzle', PuzzleViewSet, basename='puzzle')
# r.register(r'cell', CellViewSet, basename='cell')

urlpatterns = r.urls
