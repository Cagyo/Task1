define(["jquery","underscore","backbone"],function($,_,Backbone){
        var Book = Backbone.Model.extend({
            defaults: {
                title: "0",
                author: '',
                price: 0,
                currency: '',
                discount: 0,
                isBook: true,
                pictureUrl: "images/noitem.png",
                count: 0
            },

            validate: function(attributes){

            },

            initialize: function(){

                this.on("invalid", function(model, error){
                    alert( error );
                });
            }
        });
        return Book;
    }
);