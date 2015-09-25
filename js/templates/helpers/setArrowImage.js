define('templates/helpers/setArrowImage', ['hbs/handlebars'], function ( Handlebars ) {
    function setArrowImage (display) {
        if(display === "block") {
            return "images/expand-opened-icon.png";
        }
        else {
            return "images/expand-closed-icon.png";
        }
    }
    Handlebars.registerHelper( 'setArrowImage', setArrowImage );
    return setArrowImage;
});