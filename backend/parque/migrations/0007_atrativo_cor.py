# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2021-07-02 17:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parque', '0006_auto_20210702_1723'),
    ]

    operations = [
        migrations.AddField(
            model_name='atrativo',
            name='cor',
            field=models.TextField(blank=True, null=True),
        ),
    ]
