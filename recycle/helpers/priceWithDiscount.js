define('templates/helpers/priceWithDiscount', ['hbs/handlebars'], function ( Handlebars ) {
    function priceWithDiscount (price, discount) {
        return price - price*discount/100;
    }
    Handlebars.registerHelper( 'priceWithDiscount', priceWithDiscount );
    return priceWithDiscount;
});