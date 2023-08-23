# E-Mobility Charging Solutions Platform

The platform includes a Django backend for managing Charge Data Records (CDRs) and an Angular frontend for interacting with the CDRs.

## Getting Started
**Before getting started, please install the below dependencies:**
   - Python (3.x)
   - Node.js
   - npm (Node Package Manager)


### Backend Setup

1. **Run Backend Script:**
   - Download the zipped folder 'CDR_BackEnd.zip' and the set-up automation script 'setup_backend.sh'
   - Run the backend automation script:
     
      - For Unix/Linux/Mac, use below command (The zipped folder and the script should be in the same directory):
     
       bash setup_backend.sh
       
      - Permissions (Unix/Linux/Mac Only): If you're on Unix/Linux/Mac, you might need to make the    script file executable before running it. You can do this using  the chmod command:

       chmod +x setup_backend.sh

      - For Windows, just double click on the automation script 
    

2. **Access the Backend:**
   - The Django development server should now be running at http://127.0.0.1:8000/admin
   - Access the backend and manage CDRs.
     username: admin
     password: admin

   **API Endpoints:**
   - Create a Charge Data Record:
     - Endpoint: `http://127.0.0.1:8000/cdr/`
     - Description: Create a new Charge Data Record with below constraints:
       - The "End time" cannot be smaller than "Start time" 
       - The "Start time" of an upcoming Charge Data Record for a particular vehicle must always be  bigger than the "End time" of any previous Charge Data Records. 
       - The "Total cost" must be greater the 0 

   - Get a Charge Data Record by ID:
     - Endpoint: `http://127.0.0.1:8000/cdr/{id}/`
     - Description: Retrieve a specific Charge Data Record by its ID.

### Frontend Setup

1. **Run Frontend Script:**
   - Download the zipped folder 'CDR_FrontEnd.zip' and the set-up automation script 'setup_frontend.sh'
   - Run the frontend automation script:
     
   - For Unix/Linux/Mac, use below command (The zipped folder and the script should be in the same directory):
     
     bash setup_frontend.sh
     
   - Permissions (Unix/Linux/Mac Only): If you're on Unix/Linux/Mac, you might need to make the    script file executable before running it. You can do this using the chmod command:

     chmod +x setup_frontend.sh

   - For Windows, just double click on the automation script 

2. **Access the Frontend:**
   - The Angular development server should now be running at http://localhost:4200
   - Access the frontend application and interact with CDRs.

## Contact

If you have any questions or need assistance, please contact Alam Sher Khan at alamsherkhan1@gmail.com
