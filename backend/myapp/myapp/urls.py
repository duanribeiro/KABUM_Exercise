from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from clients import views as cl_views
from login import views as lo_views

urlpatterns = [
    path('login', lo_views.login),
    path('logout', lo_views.logout),
    path('clients', cl_views.clients_list),
    path('clients/<int:pk>', cl_views.clients_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
