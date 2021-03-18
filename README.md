# Recipe App

## Project Description

Create a Node/Express backend and a React frontend that communicate with each other.

## Project Links
Front End
- [github repo](https://github.com/salsc/project4-frontend)
- [deployment](https://sei-project4-front-end.herokuapp.com/)

Back End
- [github repo](https://github.com/salsc/deere-project4-express-api-starter)
- [deployment](https://sei-project4-back-end.herokuapp.com/)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [wireframes](https://github.com/salsc/project4-frontend/blob/main/planning/Project%204%20Wireframe.pdf)
<!-- - [react architecture]() -->

List of stored recipes, open each recipe to show component or create new recipe, existing recipes can be deleted or edited.

### MVP/PostMVP - 5min

##### MVP
Able to do full CRUD on recipes.
##### PostMVP
1. Add additional db tables for ingredients and directions so they can be fully dynamic and mapped in the app.
2. Add bootstrap elements for styling. Potentially use cards for each recipe.
3. User specific recipes: user DB/CRUD, join users + recipes

#### MVP EXAMPLE
- Establish database table 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Allow user specific recipe lists

##### Snapshot of Home page

![alt text](https://github.com/salsc/project4-frontend/blob/main/planning/App%20Screenshot.png "App Homepage Snapshot")

## Components

* App component - main app
* Home component - show list of recipes in DB
* Show component - show specific recipe details
* Create component - create new recipe
* Edit component - edit existing recipe, displaying stored values as defaults

## Additional Libraries
 <!-- Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. -->
 * [Github] - Repository
 * [Heroku] - Deployment
 * [Express, Node.JS] - Separation of functions, controllers
 * [Sequelize, PostgreSQL] - Persistent database and interaction
 * [ReactJS] - Front end UI/UX

## Code Snippet
```
<ol className="directList">
    {recipeDetail.txtDirections1 && <li>{recipeDetail.txtDirections1}</li>}
    {recipeDetail.txtDirections2 && <li>{recipeDetail.txtDirections2}</li>}
    {recipeDetail.txtDirections3 && <li>{recipeDetail.txtDirections3}</li>}
    {recipeDetail.txtDirections4 && <li>{recipeDetail.txtDirections4}</li>}
</ol>
```
This section of code conditionally renders JSX elements based on whether or not there is a value stored for it in the DB. This was necessary because I did not have separate tables for ingredients and directions in the DB that I could map thru and conditionally rendor in that way.


## Issues and Resolutions
Passing routerProps was a big deal.
Connecting back end and front end apps on Heroku was challenging.

#### SAMPLE.....
**ERROR**:                          
**RESOLUTION**: 

## User Stories
1. User should be able to view the list of stored recipes in the DB.
2. User should be able to create a new recipe and store it in the DB.
3. User should be able to select a recipe and view the details of that recipe.
4. User should be able to edit an existing recipe without retyping all the information from scratch.
5. User should be able to display an image to represent the finished product of the recipe.
6. User should be able to delete a recipe. This function should be nested in the edit page to prevent accidental use.