/*************************************************************************************************
 * Harshay
 * Full Stack Javascript
 * Techdegree
 * Treehouse
 * Project 6 : Static Node.js & Express Site
 * Grade : Exceeds Expectation
 ************************************************************************************************/

//notes

//locals meaning reference
//https://stackoverflow.com/questions/32688857/what-is-meaning-of-locals-in-res-render-node-js
//https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1

//requiring modules and defining path 
//https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/

//res locals explained in express
//https://www.youtube.com/watch?v=IuqhkjkcXbo

//pug loop explained
//https://www.youtube.com/watch?v=4ciMkWOAGRY 

//pug cheatsheet
//https://devhints.io/pug

 ///////////////////////////////////////////////////////////////////////////////////////////////////

 //import express module
const express = require('express'); 

//create express application 
const app = express();

//import json data file 
// use './' to move up/outside the node_modules folder as the file is in the root
const data = require('./data.json');

//set up templating engine  
app.set('view engine','pug');

//use a static route and the express.static method to serve the static files located in the public folder
app.use('/static', express.static('public'));

//skills array
const about_skills = ['HTML','CSS','Javascript','Python','Machine Learning'];

//render and return the ; index page
app.get('/',(req,res) => { 

    //set variables
    res.locals.index_heading = "Harshay's Developer Portfolio";
    res.locals.data_obj_array = data.projects; 
    res.locals.portfolio_description = "Web Development & Data Science Projects";

    res.render('index'); 

});

//render and return the ; about page 
app.get('/about',(req,res) => { 

    res.locals.about_name  = 'Harshay';
    res.locals.about_title = 'Full Stack Javascript Developer';
    res.locals.about_elevator_pitch = "I'm a Web Developer & Treehouse Techdegree Graduate";
    res.locals.about_contact_number = '0044-79380*****';
    res.locals.about_email = 'harshaykr@hotmail.com';
    res.locals.about_skills_array =  about_skills; 
    res.locals.about_github_link = 'https://github.com/harshay';
    res.locals.about_linkedin_link = 'https://www.linkedin.com/in/harshay-r-61a4a02a/';
    res.locals.about_twitter_link = 'https://https://twitter.com/HarshayR';

    res.render('about'); 

});

//set up development server
app.listen(3000);


/*

//img, link tags loop code

      //- Use the Pug `each` iterator to create a project img, title and link in the markup for each of the projects you are showcasing.  
      
      //- Use a combination of interpolation and template literals as needed to dynamically generate the the routes in the href, as well as the img's src and the projects title.
      
      //- Here's what the Pug for each project example should look like. 
.cell
        a(href='#')
          img.thumbnail(src='https://placehold.it/550x550')
          h5 Title
*/