// requires
const express = require( 'express' );
const app = express();
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
}) // end server up
// routes