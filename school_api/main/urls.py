from django.urls import path
from . import views

# A list of url patterns.
urlpatterns = [
    path("teachers", views.TeacherList.as_view()),
    path("teachers/<int:pk>", views.TeacherDetail.as_view()),
]
