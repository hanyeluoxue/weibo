from django.shortcuts import render

# Create your views here.


def my_profile(request):
    position = 'my_profile'
    return render(request, 'UIProfile/profile.html', locals(),)


def my_album(request):
    position = 'my_album'
    return render(request, 'UIProfile/profile.html', locals(),)


def my_follow(request):
    position = 'my_follow'
    return render(request, 'UIProfile/profile.html', locals(),)
