# Generated by Django 2.0.5 on 2018-10-31 11:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('chain', '0011_auto_20181029_2128'),
    ]

    operations = [
        migrations.AddField(
            model_name='target',
            name='lastAction',
            field=models.CharField(default='Who knows', max_length=20),
        ),
        migrations.AddField(
            model_name='target',
            name='lastUpdate',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='target',
            name='life',
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name='target',
            name='lifeMax',
            field=models.IntegerField(default=100),
        ),
        migrations.AddField(
            model_name='target',
            name='status',
            field=models.CharField(default='Okay', max_length=100),
        ),
    ]
