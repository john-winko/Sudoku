from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from .mediator import create_game, get_hint as get_hint_from_request
from .models import SudokuBoard
from .serializers import SudokuBoardSerializer


class PuzzleViewSet(ModelViewSet):
    queryset = SudokuBoard.objects.all()
    serializer_class = SudokuBoardSerializer


def send_the_homepage(request):
    react_index = open('build/index.html').read()
    return HttpResponse(react_index)


@api_view(['POST'])
def log_in(request):
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


@api_view(["GET"])
def who_am_i(request):
    if request.user.is_authenticated:
        return JsonResponse({"user": request.user.username})
    return JsonResponse({"user": None})


@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged you out!')


@api_view(['GET'])
def start_game(request):
    # TODO add user capture if logged in
    board = create_game(request.GET['board'] if 'board' in request.GET else None, request.user)
    return JsonResponse(SudokuBoardSerializer(board).data)


@api_view(['POST', 'GET'])
def get_hint(request):
    if 'boardString' in request.data:
        hint = get_hint_from_request(request.data['boardString'])
        return JsonResponse(hint)
    return HttpResponse("failed")


@api_view(['POST', 'GET'])
def test(request):
    print(request)


