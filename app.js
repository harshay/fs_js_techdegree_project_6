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

//render and return the ; index page
app.get('/',(req,res) => { 

    res.locals.index_heading = "Harshay's Developer Portfolio";
    res.locals = data.projects; 
    res.render('index'); 

});

//render and return the ; about page 
app.get('/about',(req,res) => { 

    res.render('about'); 

});

//set up development server
app.listen(3000);





