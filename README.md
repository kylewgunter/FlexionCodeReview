Flexion Code Review

The Problem: 
Our users are science teachers who are as comfortable using the command line as they are using a browser. In their “Unit Conversion” science unit, they want to assign students unit-conversion problems on paper worksheets. After students turn in their completed worksheets, the teachers want to be able to enter the questions and student responses into a computer to be graded. Students will convert:
temperatures between Kelvin, Celsius, Fahrenheit, and Rankine
volumes between liters, tablespoons, cubic-inches, cups, cubic-feet, and gallons
Requirements:
The requirements below are not intended to suggest a particular user interface, just what data the user must provide as input and what data the system must provide as output.
The teacher must be able to provide an input numerical value, an input unit of measure, a target unit of measure, and a student’s numeric response.
The system indicates that the response is correct, incorrect, or invalid. To be considered correct, the student’s response must match an authoritative answer after both the student’s response and authoritative answer are rounded to the tenths place. 
Optional Challenge: Implement a basic continuous integration/continuous deployment (CI/CD) pipeline for your code using your solution of choice (cloud solutions are acceptable). What you provide should support a peer code review process and seamless app deployment when a commit is merged to trunk.


Descrepancies with unit conversions and npm convert units - flexion sample data and google unit conversions
Live and deployed on heroku for testing

Future Development tasks -
- Add more front end visual styling with CSS 
- add a more dynamic drop down menu that would have the full value of measurements 
- add more units
- create a responsive design
- more options for user inputs - automated conversions with an input of student values to test against
- better dialog options for window alert on submit