define('templates/helpers/getTextState', ['handlebars'], function ( Handlebars ) {
    function getTextState (state) {
        if(state === 0) {
            return "???????";
        }
        else if(state === 1){
            return "????????? ?????????? ???????";
        }
        else {
            return "????????";
        }
    }
    Handlebars.registerHelper( 'getTextState', getTextState );
    return getTextState;
});