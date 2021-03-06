define('templates/helpers/getTextState', ['hbs/handlebars'], function ( Handlebars ) {
    function getTextState (state) {
        if(state === 0) {
            return "Отменен";
        }
        else if(state === 1){
            return "Отправлен курьерской службой";
        }
        else {
            return "Выполнен";
        }
    }
    Handlebars.registerHelper( 'getTextState', getTextState );
    return getTextState;
});