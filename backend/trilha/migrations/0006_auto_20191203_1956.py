# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2019-12-03 19:56
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('trilha', '0005_auto_20190805_1916'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImagemTrilha',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('autor', models.CharField(blank=True, max_length=200, null=True, verbose_name='Autor')),
                ('imagem', models.ImageField(upload_to='trilha/')),
                ('trilha', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trilha.Trilha')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='YoutubeVideo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('nome', models.CharField(blank=True, max_length=250, null=True)),
                ('autor', models.CharField(blank=True, max_length=250, null=True)),
                ('url', models.URLField(blank=True, null=True)),
                ('trilha', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trilha.Trilha')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AlterModelOptions(
            name='visitantetrilha',
            options={},
        ),
    ]
