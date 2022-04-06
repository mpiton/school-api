from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

# This class defines the create behavior of our rest api
class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # add a permission to only allow authenticated users to access this url
    permission_classes = (IsAuthenticated,)


# Retrieve, update, or delete a teacher
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    # add a permission to only allow authenticated users to access this url
    permission_classes = (IsAuthenticated,)
