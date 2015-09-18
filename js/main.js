require.config({
    paths: {
        jquery: '../lib/vendor/jquery/dist/jquery.min',
        underscore: '../lib/vendor/underscore/underscore-min',
        worker: 'Worker.min',
        application: 'Application.min'
    }
});

require(["jquery","underscore","application"],function($,_,Application){

});