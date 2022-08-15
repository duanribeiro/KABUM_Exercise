from django.db import models


class Address(models.Model):
    """A typical class defining a model, derived from the Model class."""
    street = models.CharField(max_length=100)
    number = models.IntegerField()


class Clients(models.Model):
    """A typical class defining a model, derived from the Model class."""
    name = models.CharField(max_length=20)
    birthday = models.DateField()
    cpf = models.CharField(max_length=11)
    rg = models.CharField(max_length=9)
    phone = models.CharField(max_length=11)
    # addresses = models.ForeignKey(Address, on_delete=models.SET_NULL, blank=True, null=True)
