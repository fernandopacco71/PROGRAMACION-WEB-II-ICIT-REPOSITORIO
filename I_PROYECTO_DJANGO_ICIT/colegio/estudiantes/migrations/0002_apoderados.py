# Generated by Django 3.2.6 on 2021-08-25 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estudiantes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Apoderados',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idApoderados', models.IntegerField(unique=True)),
                ('nombreApoderados', models.TextField(default='', max_length=60)),
                ('apellidosApoderados', models.TextField(default='', max_length=60)),
                ('dniApoderados', models.CharField(max_length=8, unique=True)),
                ('domicilioApoderados', models.TextField(default='', max_length=100)),
                ('sexoApoderados', models.CharField(max_length=1)),
            ],
        ),
    ]
