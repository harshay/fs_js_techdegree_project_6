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

 ///////////////////////////////////////////////////////////////////////////////////////////////////

const express = require('express'); 

//create express application 
const app = express();

//import json data file 
// use './' to move up/outside the node_modules folder as the file is in the root
const data = require('./data.json');

//Optionally - the path module which can be used when setting the absolute path in the express.static function.

//set up templating engine  
app.set('view engine','pug');

//use a static route and the express.static method to serve the static files located in the public folder

//index
app.get('/',(req,res) => { 

    res.render('index'); 

});

//index
app.get('/',(req,res) => { 

    res.render('about'); 

});

//set up development server
app.listen(3000);




