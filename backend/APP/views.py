from django.http import JsonResponse

def test_api(request):
    return JsonResponse({"message": "You know what?! This is actually kinda cool, ngl!"})
