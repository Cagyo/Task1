define('templates/helpers/getDeliveryMethod', ['hbs/handlebars'], function ( Handlebars ) {
    function getDeliveryMethod (value) {
        if(value === 0) {
            return "Курьером лично в руки";
        }
        else {
            return "Самовывоз";
        }
    }
    Handlebars.registerHelper( 'getDeliveryMethod', getDeliveryMethod );
    return getDeliveryMethod;
});