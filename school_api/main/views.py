from django.shortcuts import render
from rest_framework.views import APIView
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework.response import Response
from rest_framework import generics



class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    

