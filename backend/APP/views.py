from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
def register_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            first_name = data.get("first_name")
            last_name = data.get("last_name")
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            # Check if username or email already exists
            if User.objects.filter(username=username).exists():
                return JsonResponse({"message": "Username already taken"}, status=400)
            if User.objects.filter(email=email).exists():
                return JsonResponse({"message": "Email already in use"}, status=400)

            # Hash password before saving (never store plain text passwords)
            hashed_password = make_password(password)

            # Create user
            user = User.objects.create(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=email,
                password=hashed_password,
            )

            return JsonResponse({"message": "User registered successfully"}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid request"}, status=400)

    return JsonResponse({"message": "Invalid request method"}, status=405)


from django.contrib.auth.hashers import check_password
from .models import User

@api_view(['POST'])
@csrf_exempt
def login_view(request):
    try:
        data = request.data if hasattr(request, 'data') else json.loads(request.body)
        username = data.get("username")
        password = data.get("password")
        
        try:
            # Find user by username
            user = User.objects.get(username=username)
            
            # Check if password matches
            if check_password(password, user.password):
                # We can't use Django's login() since this isn't a Django User
                # Instead, store user info in session manually
                request.session['user_id'] = user.id
                request.session['username'] = user.username
                
                return JsonResponse({
                    "message": "Login successful",
                    "user": {
                        "id": user.id,
                        "username": user.username,
                        "email": user.email
                    }
                }, status=200)
            else:
                return JsonResponse({"message": "Invalid password"}, status=401)
        except User.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=401)
            
    except Exception as e:
        return JsonResponse({"message": str(e)}, status=400)

from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
@ensure_csrf_cookie
def get_csrf_token(request):
    return Response({"message": "CSRF cookie set"})
