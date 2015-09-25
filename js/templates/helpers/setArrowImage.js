define('templates/helpers/setArrowImage', ['handlebars'], function ( Handlebars ) {
    function setArrowImage (state) {
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