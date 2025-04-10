from django.db import models


class Menu(models.Model):
    category = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    price = models.CharField(max_length=40)

    def __str__(self):
        return self.name
