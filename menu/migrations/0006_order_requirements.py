# Generated by Django 4.2.17 on 2025-01-13 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0005_alter_itemorder_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='requirements',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]