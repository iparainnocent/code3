## Wk3 Code Challenge
### Introduction
For this assessment, you'll be working on Flatdango. Flatiron Movie Theater is open for business! You will be building out an application, Flatdango, that allows a user to purchase movie tickets from the theater.

The instructions below will walk you through the process of ideation and planning your app: deciding on your user interface, planning how the information will be laid out on the page, etc. You should work through all the planning steps before you start doing any coding.

 

## Requirements
For this project, you must:


### Project Setup
Once you have the plan in place for the application you want to build take the following steps:

- Create a new project folder.
- Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
- Please make sure you regularly commit to the repository.
## Installation 
### System Requirements

- Node 18+
- Abrowser capable of running javascript (chrome)
- Operatingv System(Linux)
- A text editor capable of running javascript (Visual Studio Code)
- RAM - 4GB

To use this repo, follow these steps:
if you want to get the code in this website:
- Open your browser and copy the following
- git clone 



- Create a respiratory in your github account to link with your work code in visual studio code.
 - Open your terminal in Visual Studio Code

### Files used
- HTML: The structure and layout of the web page.
- CSS: The styling and visual appearance of the application.
- JavaScript: The functionality and interactivity of the application.

### HTML file
#### Movie Ticket 
The Movie Ticket  is a simple web application that allows users to view a list of available movies and purchase tickets for their desired showtime.

#### Features
- Movie List: The app displays a list of movies available for purchase.
- Movie Details: When a user selects a movie, the app shows the movie poster, title, runtime, showtime, and the number of available tickets.
- Buy Ticket: Users can click the "Buy Ticket" button to purchase a ticket for the selected movie.
#### Usage
To use the Movie Ticket , follow these steps:

- Open the HTML file in a web browser.
- The app will display the list of available movies in the "Movies" section.
- Click on a movie to view its details in the "Movie Details" section.
- If tickets are available, click the "Buy Ticket" button to purchase a ticket.

### Script.js file
Movie Ticket  - JavaScript
This JavaScript code is responsible for the dynamic functionality of the Movie Ticket.

#### Features
- Fetch Movie Data: The script fetches movie data from the /films endpoint and populates the movie list on the page.
- Display Movie Details: When a user clicks on a movie in the list, the script updates the "Movie Details" section with the selected movie's information, including the poster, title, runtime, showtime, and available tickets.
- Buy Ticket: Users can click the "Buy Ticket" button to purchase a ticket for the selected movie. The script updates the available tickets count and disables the button if the movie is sold out.
#### File Structure
The script is contained in a single file, script.js, which should be included in the HTML document.

##### Functions
- fetch('https://innocentio.vercel.app/films'): This function fetches the movie data from the https://innocentio.vercel.app/films endpoint and processes the response.
- showMovieDetails(movie): This function updates the "Movie Details" section with the selected movie's information and sets up the "Buy Ticket" button functionality.
#### Functionality 
- Fetch Movie Data: The script first fetches the movie data from the https://innocentio.vercel.app/films endpoint using the fetch function. Once the data is received, it is parsed as JSON and used to populate the movie list.
- Display Movie Details: When a user clicks on a movie in the list, the showMovieDetails function is called with the selected movie object as a parameter. This function updates the "Movie Details" section with the movie's poster, title, runtime, showtime, and available tickets.
Buy Ticket: The "Buy Ticket" button is initially enabled if there are available tickets. When the user clicks the button, the script updates the available tickets count and disables the button if the movie is sold out.
#### Customization
To customize the Movie Ticket , you can modify the following:

-  Movie Data: Update the movie data (titles, posters, runtimes, showtimes, capacities, tickets sold, etc.) in the script.js file or the server-side endpoint that provides the movie data.
- Styling: Modify the CSS styles in the style.css file to change the appearance of the application.
- Functionality: Enhance the JavaScript code in the script.js file to add more features, such as user authentication, ticket reservation, and so on.

### Contributing
If you find any issues or have suggestions for improvements, feel free to create a new issue or submit a pull request on the project's repository.

## Author
Innocent Omonya.
 