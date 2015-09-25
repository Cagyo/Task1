define('templates/helpers/getPaymentMethod', ['handlebars'], function ( Handlebars ) {
    function getPaymentMethod (state) {
        if(state === 0) {
            return "????????? ??? ?????????";
        }
        else {
            return "????????????";
        }
    }
    Handlebars.registerHelper( 'getPaymentMethod', getPaymentMethod );
    return getPaymentMethod;
});