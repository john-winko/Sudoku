from django.http import HttpResponse


# Create your views here.
def send_the_homepage(request):
    react_index = open('build/index.html').read()
    return HttpResponse(react_index)
