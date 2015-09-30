define('templates/helpers/getPaymentMethod', ['hbs/handlebars'], function ( Handlebars ) {
    function getPaymentMethod (state) {
        if(state === 0) {
            return "Наличными при получении";
        }
        else {
            return "Безналичными";
        }
    }
    Handlebars.registerHelper( 'getPaymentMethod', getPaymentMethod );
    return getPaymentMethod;
});