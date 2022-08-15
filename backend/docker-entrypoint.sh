#!/bin/sh
# Wait MySQL
backend/wait-for-it.sh -t 180 mysql_db:3306

# Load initial data
echo "Load admin user"
python backend/myapp/manage.py loaddata backend/admin.json

# Apply database migrations
echo "Apply database migrations"
python backend/myapp/manage.py makemigrations
python backend/myapp/manage.py migrate

# Start server
echo "Starting server"
python  backend/myapp/manage.py runserver 0.0.0.0:8000