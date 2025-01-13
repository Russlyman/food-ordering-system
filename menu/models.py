from django.db import models
from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

ORDER_TYPE = ((0, "Collection"), (1, "Delivery"))


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


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    placed = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    requirements = models.CharField(max_length=150, blank=True)
    order_type = models.IntegerField(choices=ORDER_TYPE, null=True, blank=False)

    def __str__(self):
        return f"Order {self.id} - {self.user.username}"


class ItemOrder(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name="orders")
    quantity = models.IntegerField(
        default=1,
        validators=[
            MinValueValidator(0),
            MaxValueValidator(10),
        ],
    )

    class Meta:
        verbose_name_plural = "ItemOrders"
        constraints = [
            models.UniqueConstraint(fields=["order", "item"], name="unique_order_item")
        ]

    def __str__(self):
        return f"Order {self.order.id} - {self.order.user.username} - {self.item.name}"
