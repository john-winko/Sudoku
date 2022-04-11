from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, action
from rest_framework.viewsets import ModelViewSet
from .mediator import create_game, get_hint as get_hint_from_request
from .models import SudokuBoard
from .serializers import SudokuBoardSerializer, UserSerializer


class PuzzleViewSet(ModelViewSet):
    queryset = SudokuBoard.objects.all()
    serializer_class = SudokuBoardSerializer

    @action(detail=False)
    def start_game(self, request, pk=None):
        board = create_game(request.GET['board'] if 'board' in request.GET else None, request.user)
        return JsonResponse(SudokuBoardSerializer(board).data)

    @action(detail=False, methods=['post', 'put'])
    def get_hint(self, request, pk=None):
        # TODO make this detail specific
        # update model board
        # recalc candidates
        if 'boardString' in request.data:
            hint = get_hint_from_request(request.data['boardString'])
            return JsonResponse(hint)
        return HttpResponse("failed")

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

