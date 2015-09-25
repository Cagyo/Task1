define('templates/helpers/getPictureState', ['hbs/handlebars'], function ( Handlebars ) {
    function getPictureState (state) {
        if(state === 0) {
            return "images/cancelled-icon.png";
        }
        else if(state === 1){
            return "images/car-icon.png";
        }
        else {
            return "images/delivered-icon.png";
        }
    }
    Handlebars.registerHelper( 'getPictureState', getPictureState );
    return getPictureState;
});