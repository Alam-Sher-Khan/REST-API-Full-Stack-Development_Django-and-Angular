#!/bin/bash

# Unzip the frontend zip file
unzip CDR_FrontEnd.zip

# Navigate to the frontend directory
cd CDR_FrontEnd

# Install frontend dependencies
npm install

# Start the Angular development server
ng serve
