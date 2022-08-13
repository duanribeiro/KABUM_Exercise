from django.db import models


class Address(models.Model):
    """A typical class defining a model, derived from the Model class."""
    # Fields
    street = models.CharField(max_length=100, help_text='Enter field documentation')
    number = models.IntegerField(help_text='Enter field documentation')


class Clients(models.Model):
    """A typical class defining a model, derived from the Model class."""
    # Fields
    name = models.CharField(max_length=20, help_text='Enter field documentation')
    birthday = models.DateField(help_text='Enter field documentation')
    cpf = models.CharField(max_length=11, help_text='Enter field documentation')
    rg = models.CharField(max_length=9, help_text='Enter field documentation')
    phone = models.CharField(max_length=11, help_text='Enter field documentation')
    adresses = models.ForeignKey(Address, on_delete=models.SET_NULL, blank=True, null=True)
