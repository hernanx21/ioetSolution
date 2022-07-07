[![Deploying Pipeline](https://github.com/hernanx21/ioetSolution/actions/workflows/pipeline.yml/badge.svg)](https://github.com/hernanx21/ioetSolution/actions/workflows/pipeline.yml)

![alt text](https://github.com/hernanx21/ioetSolution/master/architecture.png?raw=true)

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame
The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.
Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:
Example 1:
INPUT
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

OUTPUT:
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2
Example 2:
INPUT:
RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
OUTPUT:
RENE-ASTRID: 3

# Architecture

The Architecture approach is based on a clean architecture, it tries to separate entities, use cases, controllers, and so on. 

# Approach and Methodology

The solution was made by separating the different functionalities based on the problem, having the Document class which was in charge to read, process and print the answer of the data from 'scheduleData.txt' file stored in the root of the project.

The class DocumentHelper contains all the functionalities to process the data from de 'txt' file. Starting from iterating line by line the schedule of the users.

The getUserSchedule method recieves a string with the user name and schedule and it returns both separately. Working with it, we'll find getSchedule method, which work is basically return an array of a schedule given.

The validateRedundancy method validates if a pair of users are already in the resultant array that contains the final pairs.

The setCount method pushes the number of coincidential schedules for the pairs given after validating if they are suitable to be registered.

The splitHours method, as it name says, it isolates the hours of a period given in order to be validated.

And finally we got a getter, getResult, that returns the final message to be printed on screen -console-.

# How to run the solution locally

In order to run it Locally you should consider the following steps:
    1.- Clone this github repository with: git clone https://github.com/hernanx21/ioetSolution.git
    2.- Install test dependencies by typing npm install command.
    3.- To run Tests, type npm run test command.
    4.- To run the solution, type npm run start.

The solution have no project dependencies, so, if you don't want to test the functionalities first, just avoid step 2.

In case you want to run the solution locally with docker:

    1.- Type docker pull hernanx21/ioet-solution-public-repo:master-42924bb in your terminal
    2.- Then type docker images, to see our image id
    2.- And, when it is downloaded, type docker run <image_id> to see the result.