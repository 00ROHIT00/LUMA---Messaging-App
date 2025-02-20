from django.db import models

# Create your models here.
class User(models.Model):
  
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=255)  # Store hashed passwords later
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.email