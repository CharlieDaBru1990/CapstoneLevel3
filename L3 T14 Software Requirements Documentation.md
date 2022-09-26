System Requirements Document- Level 3 Task 14 Capstone Project Part 1
Software Requirements Documentation 


For


Task Management System


Prepared By


Chalton Prins


Full Stack Developer - HyperionDev 
Level 3 Task 14 
Capstone Project Part 1: Planning


Student Number: CP21080000451


cgprins@gmail.com


Introduction
1.1 Document Purpose
1.2 Product Scope
Overall Description
2.1 Product Perspective
2.2 Product Functionality
2.3 Wireframe UI of Task Management Application
2.4 User Stories
Specific Requirements
3.1 External Interface Requirements
3.2 Functional Requirements
Other Non-Functional Requirements
4.1 Performance Requirements
4.2 Safety and Security Requirements
4.3 Software Quality Attributes


Introduction
This Software Requirements Specification, SRS, will provide a description for a task management system. In the following sections we will define the document purpose and the scope of the task management product.
1.1 Document Purpose
This Software Requirements Specification will describe the processes and functions of the Task Management System. Documents such as this one are intended for the designers of The Application and managers and their employees. Within this documentation, a major portion of the product is described. An upgrade to The Application may be available in the future.
1.2 Product Scope
It allows both managers and workers to keep track of the tasks they need to complete on a daily basis using an interface provided by the Task Management System. There will be a different user interface for each type of user, admin, manager or worker. It will be possible for the manager to use a traditional manager interface, while the worker will be able to use a traditional worker interface. Managers can enter new tasks, edit them, delete them, and search them through the interface. Additionally, users can be created and deleted from the manager interface. Users can search tasks and mark completed tasks using the worker interface. There will also be a list of tasks assigned or completed in the Application.
Overall Description
2.1 Product Perspective
The Task Management web application will be a new self-contained product designed using the MERN Stack. Communication will be done via a JavaScript interface and React Framework (create-react-app) to a server (server.js file) that will connect with the database (Mongo Atlas DB) that stores the Task Management information.
I will be deploying my application on render- Since Heroku now is a billable deploying host.
Render offers the best of both worlds — incredible ease of use coupled with immense power and scalability to power everything from a simple HTML page to complex applications with hundreds of microservices. I will also be using a CSS file to style my entire application.


This new task management will benefit the business by:
* Boost Productivity
* Streamline Processes
* Allow for transparency in the business
* Allow Employees/Managers to plan their day accordingly and meet set deadlines
2.2 Product Functionality


The log-on interface
•The application will various role users to log in namely: Admin, Manager and Employee
•The application will allow new users to be created by an admin account
•The application will allow existing users to log-on to their account


The Admin interface
•The application will update from the database upon log-on
•The application will allow for management of worker accounts for creation and deletion of users
•The application will allow for searching of current and previous tasks
•The application will update database upon logging out


The Manager interface
•The application will update from the database upon log-on
•The application will allow for management of worker accounts for creation and deletion of users
•The application will allow for changing/allocation of both manager and worker tasks
•The application will allow for searching of current and previous tasks
•The application will update database upon logging out


The manage tasks interface
•The application will allow for creation of new tasks
•The application will allow for editing of tasks
•The application will allow for deletion of tasks
•The application will allow for management confirmation of completed tasks


The worker interface
•The Application will update from the database upon log-on
•The Application will allow for tasks to be marked completed
•The Application will allow for searching of current and previous tasks
•The Application will update database upon logging out
________________
2.3 Wireframe UI of Task Management Application
  
Shown in attachment "Wireframes"


________________
2.4 User Stories
The Task Management application will have five main graphical user interfaces:


* Replace current sticky note system(Current system being used fictitiously)
* Add a public facing page with basic contact info
* Add an employee login to the notes app
* Provide a welcome page after login
* Provide easy navigation
* Display current user and assigned role
* Provide a logout option
* Require users to login at least once per week
* Provide a way to remove employee access asap if needed
* Notes are assigned to specific employees
* Notes have a ticket #, title, note body, created & updated dates
* Notes are either OPEN or COMPLETED
* Users can be Employees, Managers, or Admins
* Notes can only be deleted by Managers or Admins
* Anyone can create a note (when customer checks-in)
* Employees can only view and edit their assigned notes
* Managers and Admins can view, edit, and delete all notes
* Only Managers and Admins can access User Settings
* Only Managers and Admins can create new users
* Desktop mode is most important but should be available in mobile
Specific Requirements
3.1 External Interface Requirements
The  Task Manager system will have 5 main graphical user interfaces:


Log  On Page- will  consist of  the  log-on  interface. Users will be able to log in by entering their username and password into text fields and clicking a  button. Logging in will either load the admin interface, the manager interface, or the worker interface, depending on the type of user.


Admin Logged In Page- will consist of various different tasks. This interface will allow for tasks search, employee account management and the ability to navigate to the manage tasks UI


Manager Logged In Page- will consist of various different tasks. This interface will allow for tasks search,  employee account management and the ability to navigate to the manage tasks UI


Manage  Tasks - This feature allows the manager to verify that tasks have been completed, add new tasks, edit tasks, and delete tasks.


Worker Logged In Page- will be a limited version of the admin/manager interface. The worker will only be allowed to mark finished tasks complete, search through tasks and also add new tasks.
Hardware Interfaces
The Task Management System does not require a hardware interface.
Software Interfaces
The Task Management System will be using a JavaScript API to communicate to the server, which will allow access to the NoSQL database(MongoDB).
3.2 Functional Requirements
REQ Start-up
REQ The system will allow for user id and password
REQ The system will log user in to an admin, manager or worker portion of the application
REQ The system will allow an admin to add new users and all CRUD operations in the applications
REQ The system will allow manager to add new tasks
REQ The system will allow manager to edit tasks
REQ The system will allow manager to delete tasks
REQ The system will allow manager to confirm tasks have been completed
REQ The system will allow limited but necessary operations for workers
REQ The system will allow workers to mark tasks completed.
REQ The system will allow workers to add new tasks 
REQ The system will allow workers to search tasks
REQ The system will automatically log off a user after 15 min when there is no activity in the browser and required to login again every 7 days.
________________
Other Non-Functional Requirements
4.1 Performance Requirements
In less than two seconds, the system should perform basic operations. The user interface should update quickly while navigating the system, this is not an issue. The system shall run on a Windows platform and a Mac operating system. JavaScript applications and databases should communicate with the System. The database needs to have the capacity to grow.
4.2 Safety and Security Requirements
The level of security for this product is refined mostly to the privacy needs between users. Because  the  manager  is  responsible  for  generating  and  distributing  rewards,  improper entry into the manager’s profile may result in malicious activities leading to false payouts. Privacy  between  workers  is also  important  to  the  client  because  siblings,  peers,  or  other workers  using  the  product  may  utilize  the  ability  to  enter  another  worker’s  profile  with negative intent.


•User account names will be associated with a password which will be chosen by the user upon first use.
•The system will automatically log off a user after 15 min when there is no activity in the browser and required to login again every 7 days.


4.3 Software Quality Attributes
Here we are going to provide an explanation on how my website application (software product)will stand out from those of my competitors.        
4.1 Usability
User interfaces of the system will be designed so that operation within the system does not require training. A help document with basic instructions will be available for performing basic tasks along with easily navigable interfaces.                


4.2 Maintainability 
In order to accommodate future upgrades, the system code will be written in a way that allows for future upgrades. All changes and updates to the code will be documented, as well as the authors. Detailed comments will be provided in the code. An explanation of each method will be included along with any additional information that will be useful in adding new methods in the future.
                
4.3 Portability
Due to its ability to run on Windows and Mac operating systems, the system is portable, although previous versions of Windows have yet to be tested.




September 2022