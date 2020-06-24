$( document ).ready( onReady );

function onReady(){
    getInventoryFromServer();
} // end onReady

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