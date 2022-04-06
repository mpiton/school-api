from rest_framework import serializers
from .models import Teacher, CourseCategory, Course, Student


# This class is a serializer for the Teacher model
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = "__all__"
