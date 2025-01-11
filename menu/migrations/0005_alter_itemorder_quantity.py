# Generated by Django 4.2.17 on 2025-01-11 22:47

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0004_alter_itemorder_quantity_itemorder_unique_order_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemorder',
            name='quantity',
            field=models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(10)]),
        ),
    ]
