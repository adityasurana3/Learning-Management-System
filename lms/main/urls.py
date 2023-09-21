from . import views
from django.urls import path

urlpatterns = [
    path('teacher/', views.TeacherView.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view())
]