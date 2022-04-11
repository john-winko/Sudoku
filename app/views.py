from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from .mediator import create_game, process_hint
from .models import SudokuBoard
from .serializers import SudokuBoardSerializer, UserSerializer


class PuzzleViewSet(ModelViewSet):
    queryset = SudokuBoard.objects.all()
    serializer_class = SudokuBoardSerializer

    @action(detail=False)
    def start_game(self, request, pk=None):
        board = create_game(request.GET['board'] if 'board' in request.GET else None, request.user)
        return JsonResponse(SudokuBoardSerializer(board).data)

    @action(detail=True, methods=['post', 'put'])
    def get_hint(self, request, pk=None):
        board_model = self.get_object()
        board = request.data["board"]
        board_string = request.data["boardString"]
        json_hint = process_hint(board_string, board, board_model)
        return JsonResponse(json_hint)

    @action(detail=False, methods=['post', 'put'])
    def test(self, request, pk=None):
        print(request)
        return HttpResponse("tested")


class UserViewSet(ModelViewSet):
    # TODO should we add decorate to limit to post/put? get too much of a vulnerability?
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def login(self, request, pk=None):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            try:
                # access the base request, not DRF request (starts a login session for user)
                login(request._request, user)
            except Exception as e:
                print(str(e))
            # Don't send everything from user, only what app needs to use for state
            # return HttpResponse('success!')
            return JsonResponse({"username": user.username})
        else:
            return HttpResponse('no user!')

    @action(detail=False, methods=['post'])
    def logout(self, request, pk=None):
        logout(request)
        return HttpResponse('Logged you out!')

    @action(detail=False, methods=['get'])
    def whoami(self, request, pk=None):
        if request.user.is_authenticated:
            return JsonResponse({"user": request.user.username})
        return JsonResponse({"user": None})


def send_the_homepage(request):
    react_index = open('build/index.html').read()
    return HttpResponse(react_index)

