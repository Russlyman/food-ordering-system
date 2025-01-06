# Generated by Django 4.2.17 on 2025-01-06 22:34

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0003_alter_itemorder_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='itemorder',
            name='quantity',
            field=models.IntegerField(default=1, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
        migrations.AddConstraint(
            model_name='itemorder',
            constraint=models.UniqueConstraint(fields=('order', 'item'), name='unique_order_item'),
        ),
    ]
