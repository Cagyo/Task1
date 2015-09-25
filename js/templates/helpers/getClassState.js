define('templates/helpers/getClassState', ['handlebars'], function ( Handlebars ) {
    function getClassState (state) {
        if(state === 0) {
            return "cancelledOrder";
        }
        else if(state === 1){
            return "currentOrder";
        }
        else {
            return "completedOrder";
        }
    }
    Handlebars.registerHelper( 'getClassState', getClassState );
    return getClassState;
});