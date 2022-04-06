from django.contrib import admin
from .models import Teacher, CourseCategory, Course, Student

# Auto-generate the CRUD interfaces for the specified models.
admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Student)
