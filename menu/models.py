from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Categories"
    
    def __str__(self):
        return self.name


class Item(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="items"
    )
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = CloudinaryField("image", default="placeholder")
    price = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.name
