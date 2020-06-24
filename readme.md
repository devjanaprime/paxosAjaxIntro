Paxos AJAX Intro
===

Phase 1: set up server (see yesterday's lecture notes)
---

Phase 2: make sure server serves web page
---

in server.js:

- ```app.use( express.static( 'server/public' ) );```
- create "public" folder in "server"
- create "index.html" in "public"
- create "scripts" & "vendors" folders in "public" 
- create "client.js" in "scripts"
- move jQuery into "vendors"

Phase 3: get data from server into our script
--- 

- create a "modules" folder in "server"
- create  a module script in there (inventory.js in example)
- require "inventory.js" in "server.js"
- set up a route (/inventory in example) and have it res.send info from module
- write AJAX GET

in client.js:

```
function getInventoryFromServer(){
    console.log( 'getInventoryFromServer' );
    // make an AJAX call to url
    $.ajax({
        type: 'GET',
        url: '/inventory'
    }).then( function( response ){
        console.log( 'back from GET call with:', response );
    }).catch( function( err ){
        console.log( err );
        alert( 'ERROR getting inventory!' );
    })
} // end getInventoryFromServer
```