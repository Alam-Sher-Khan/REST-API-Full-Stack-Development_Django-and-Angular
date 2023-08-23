#!/bin/bash

# Unzip the backend zip file
unzip CDR_BackEnd.zip

# Navigate to the backend directory
cd CDR_BackEnd

# Create a virtual environment and activate it
python -m venv venv
source venv/Scripts/activate

# Install backend dependencies
pip install -r requirements.txt

# Apply migrations and collect static files
python manage.py migrate
python manage.py collectstatic

# Start the Django development server
python manage.py runserver
