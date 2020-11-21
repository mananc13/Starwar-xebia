This project was bootstrapped with [Create React App]().

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm install`

To install all the dependencies

### `yarn start` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` or `npm start`

## Question

### Objective

Clean and organised codeAdherence to prevalent guidelines and patterns speciﬁc to platform and tools chosenAbility to understand and use third-party APIs/ componentsSeparation of concernsEase of use of UI Ease of unit testing (add unit tests if possible)

### Problem Statement

Create a JavaScript application using any popular MV\* framework or react-ﬂux architecture that has two pages as described below using API from the website http://swapi.co
Please go through the documentation and API response carefully to chose the right set of APIs and call them with the proper arguments.The application is supposed to have 2 pages:

### Page 1 (Login Page)

===================
Allow the user to login as a character from STAR WARS using the character name as the username and birth year as the password.
eg:
Username:
Luke Skywalker
Password : 19BBY

### Page 2 (Search Page)

===================
Implement a type-along search which searches for planets and lists them in components (eg: div) that are sized relative to their population on every keypress in the input ﬁeld.(eg: you can use a bigger font size for a planet with larger population, or even show a bigger div for a planet with larger population)

Advanced:: Only the user Luke Skywalker should be able to make more than 15 searches in a minute

## Description Of The Application

### Login Component

Consists of the login page, in which user is asked to enter user name and password of a Star wars character.
Username: Luke Skywalker
Password : 19BBY

    On Entering Incorrect credentials, an error is displayed with appropriate message and on entering correct details, user is moved to Home Page.

### Home Component

It has the search bar component and the details component, where we can search the planet and its details are displayed respectively.

The Font size and height of Details page are displayed w.r.t the population of each planet.

If no Planet is found, then Not Found Text is Displayed.

### Search Component

To search the planet

### Details Component

To display the details of the planet

### Header Component

Displays the Heading and the has the logout Button. It is available only in the Home Page and not the login page.

### Error Component

Whenever Error Occurs, Error Component displays the Error.

### Loader Component

Displays Loader.

### Execution of Application

On Load of the application, the login page is displayed. Enter the credentials as mentioned above to successfully login.

The user will land onto Home Page ( handled using Route in React ) which has a search bar to search the planents and the section on right will display the details of the planet.

Search the Planet. It will display a list of Planets Available and on selection of Planet, Its details will be displayed with the div size increasing relative to the population of planet.

On Search if no planet is displayed in the list, then "No Result Found" text message will be displayed.

If the search box is empty, then "Planet Details To Be Displayed" text will be displayed.

A logout Button is displayed for the user to successfully logout of the application.

On reloading of screen, the user stays on the same page which has been handled using sessionStorage.
