from django.db import models

# Teacher Model
# A teacher is a person who teaches a course
class Teacher(models.Model):
    full_name = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile_number = models.CharField(max_length=10)
    address = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "1. Teacher"


# Course Category Model
# A course category is a grouping of courses
class CourseCategory(models.Model):
    category_name = models.CharField(max_length=100)
    category_description = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "2. Course Categories"


# Course Model
# A course is a class that a teacher teaches
class Course(models.Model):
    course_name = models.CharField(max_length=100)
    course_description = models.CharField(max_length=200)
    course_category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    course_teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "3. Courses"


# Student Model
# A student is a person who is studying in a course
class Student(models.Model):
    full_name = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=100)
    qualification = models.CharField(max_length=200)
    password = models.CharField(max_length=100)
    mobile_number = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    interested_course_categories = models.TextField()

    class Meta:
        verbose_name_plural = "4. Students"
