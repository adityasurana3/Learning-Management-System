from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings
from rest_framework.authtoken.models import Token

# Create your models here.
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=20)
    mobile_no = models.CharField(max_length=20)
    skills = models.TextField()
    
    def __str__(self) -> str:
        return self.full_name

class CourseCategory(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = "Course Category"
    
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    
class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=20)
    mobile_no = models.CharField(max_length=20)
    address = models.TextField()
    interested_categories = models.TextField()
    
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=None, **kwargs):
    if created:
        Token.objects.create(user=instance)