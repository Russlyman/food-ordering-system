# Generated by Django 4.2.17 on 2025-01-06 19:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0002_alter_category_options_order_itemorder'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='itemorder',
            options={'verbose_name_plural': 'ItemOrders'},
        ),
    ]