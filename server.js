const express = require('express');

const app = express();

//Create and start server

/* app.listen(3000 , function(){
     console.log("Server Started....");
});
*/

app.listen(3000 , () => {
    console.log("Server Started....");
});


//To serve Static Content
app.use(express.static('public'));

//Configure view engine : hbs
var path = require('path');
app.set('views' , path.join(__dirname , 'views')); // Give Location
//console.log(path.join(__dirname , 'views')); //To see path of file view
app.set('view engine', 'hbs'); // Give Extension


app.get('/' , (request , response) => {
    //response.end("<h1>Hello Node JS..</h1>");
    //Transfer request to html page
    response.render('index'); //Here Two doubts - (1)Extension, (2)location
});

//Configure body-parser
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));

app.post('/loginCheck' , (request , response) =>{
    // response.end("<h1>Form Submitted By POST method</h1>");

    var userid = request.body.uid;
    var password = request.body.pwd;
    if(userid == "admin" && password == "admin")
        response.render('index' , {msg : 'Login Success'});
    else
        response.render('index' , {msg : 'Login Fail'});
});





