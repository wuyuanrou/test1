# Generated by Django 3.2.18 on 2023-03-14 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myShop', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('activity_id', models.AutoField(primary_key=True, serialize=False)),
                ('activity_name', models.CharField(default='未知活动', max_length=100)),
                ('activity_info', models.CharField(default='该活动还没有任何资料', max_length=200)),
                ('activity_city', models.CharField(default='城市未定', max_length=100)),
                ('activity_spot', models.CharField(default='场地未定', max_length=200)),
                ('activity_time', models.CharField(default='时间未定', max_length=100)),
                ('activity_people', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('artist_id', models.AutoField(primary_key=True, serialize=False)),
                ('artist_name', models.CharField(default='未知艺人', max_length=100)),
                ('artist_info', models.CharField(default='该艺人还没有任何资料', max_length=200)),
            ],
        ),
        migrations.AlterField(
            model_name='user',
            name='user_info',
            field=models.CharField(default='uhoh，还没有关于该用户的介绍呢~', max_length=200),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_name',
            field=models.CharField(default='user', max_length=100),
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('ticket_id', models.AutoField(primary_key=True, serialize=False)),
                ('buyer_name', models.CharField(max_length=100)),
                ('getter_name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=100)),
                ('seat', models.CharField(max_length=100)),
                ('activity_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myShop.activity')),
            ],
        ),
        migrations.AddField(
            model_name='activity',
            name='artist_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myShop.artist'),
        ),
    ]