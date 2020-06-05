/*************************************************************************************************
 * Harshay
 * Full Stack Javascript
 * Techdegree
 * Treehouse
 * Project 6 : Static Node.js & Express Site
 * Grade : Exceeds Expectation
 ************************************************************************************************/

const express = require('express'); 

//create express application 
const app = express();

//import json data file 
const data = require('data.json').projects;


//Optionally - the path module which can be used when setting the absolute path in the express.static function.

//set up templating engine  
app.set('view engine','pug'); 

//index
app.get('/views',(req,res) => { 

    res.render('index'); 

});

//set up development server
app.listen(3000);




