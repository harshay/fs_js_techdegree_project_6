/*************************************************************************************************
 * Harshay
 * Full Stack Javascript
 * Techdegree
 * Treehouse
 * Project 6 : Static Node.js & Express Site
 * Grade : Exceeds Expectation
 ************************************************************************************************/
//notes


///////////////////////////////////////////////////////////////////////////////////////////////////
//basic app set up

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


///////////////////////////////////////////////////////////////////////////////////////////////////

//skills array
const about_skills = ['HTML','CSS','Javascript','Python','Machine Learning'];


///////////////////////////////////////////////////////////////////////////////////////////////////
//set up routes


//render and return the ; index page
app.get('/',(req,res) => { 

    //set variables
    res.locals.index_heading = "Harshay's Developer Portfolio";
    res.locals.data_obj_array = data.projects;   

    res.locals.layout_name  = 'Harshay';
    res.locals.layout_description  = 'Full Stack Javascript Web Developer';
    res.locals.portfolio_description = "Web Development & Data Science Projects";

    res.render('index'); 

});


//////////////////////////////////////////

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


//////////////////////////////////////////

//render and return the ; project page
app.get('/project/:id',(req,res) => {  

    //set variables
    res.locals.data_obj_array = data.projects; 
    res.locals.project_title = res.locals.data_obj_array[req.params.id].project_name;   
    res.locals.project_description = res.locals.data_obj_array[req.params.id].project_name;
    res.locals.project_description = res.locals.data_obj_array[req.params.id].project_name;  
    res.locals.technologies = res.locals.data_obj_array[req.params.id].technologies;  
    res.locals.project_images = res.locals.data_obj_array[req.params.id].img_urls;  
    res.locals.project_github_link = res.locals.data_obj_array[req.params.id].github_link;  

    res.render('project'); 

});


//////////////////////////////////////////

//render and return the : error page  - when user enters a url that does not exist 
app.use((req,res,next) => { 

    const err = new Error('Oops! This page does not exist');
    res.locals.error = err;
    err.status = 404;
    res.render('error');

});

///////////////////////////////////////////////////////////////////////////////////////////////////

//set up development server
app.listen(3000);


///////////////////////////////////////////////////////////////////////////////////////////////////