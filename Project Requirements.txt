The Project As an e-mobility charging solutions platform, we would like to provide a REST API and an Angular App that is capable of managing Charge Data Records (CDR) in real time to a network of Charge Point Operators (CPO). 
CDR ("Charge Data Record") is a data structure that is generated for every charging process of vehicles". , 
CPO ("Charge Point Operator") is a legal entity/company that operates one or multiple charge points. 
In order to achieve that goal, a CDR contract and a set of endpoints are required as follows: 
Charge Data Record fields (no pre defined field types are imposed) 
• Session identification 
• Vehicle identification 
• Start time 
• End time 
• Total cost Endpoints 
Create a Charge Data Record 
• The "End time" cannot be smaller than "Start time" 
• The "Start time" of an upcoming Charge Data Record for a particular vehicle must always be bigger than the "End time" of any previous Charge Data Records. 
• The "Total cost" must be greater the 0 
• Get a Charge Data Record by id 
UI 
• Display the charging records in a table with pagination
• The user is able to sort the table by Start time and End time, in ascending and descending order 
• The user is able to sort the table by Total cost, in ascending and descending order 
• The user is able to filter the table records by ID Constraints 
Deliverable 
• A zip file containing the backend project 
• A zip file containing the angular project