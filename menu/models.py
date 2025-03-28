from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', blank=True, null=True)

    def __str__(self):
        return self.name

class Menu(models.Model):
    category = models.CharField(max_length=200)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name
