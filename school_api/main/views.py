from django.shortcuts import render
from rest_framework.views import APIView
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework.response import Response



class TeacherList(APIView):
    def get(self, request):
        """
        Get all teachers and return them in JSON format

        :param request: The HTTP request that triggered this view
        :return: A JSON object containing a list of all the teachers.
        """
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)
