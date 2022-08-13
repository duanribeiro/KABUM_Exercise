#!/bin/sh
# Wait MySQL
./wait-for-it.sh -t 180 mysql_db:3306

# Load initial data
cd myapp
echo "Load admin user"
python manage.py loaddata admin.json

# Apply database migrations
echo "Apply database migrations"
python manage.py makemigrations
python manage.py migrate

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:8000