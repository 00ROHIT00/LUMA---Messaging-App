from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True)  # Ensure unique username
    email = models.EmailField(unique=True)  # Ensure unique email
    password = models.CharField(max_length=255)  # Store hashed passwords in production
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
