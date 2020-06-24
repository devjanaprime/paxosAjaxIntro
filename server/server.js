// requires
const express = require( 'express' );
const app = express();
const inventory = require( './modules/inventory' );
// uses
app.use( express.static( 'server/public' ) );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
    /// - test to see what inventory is
    console.log( 'inventory:', inventory );
}) // end server up
// routes
app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( inventory );
}); 