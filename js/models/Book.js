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
                this.calculatePriceWithDiscount();
                this.on("invalid", function(model, error){
                    console.log( error );
                });
            },

            calculatePriceWithDiscount: function () {
                this.set("priceWithDiscount",this.get("price") - this.get("price")*this.get("discount")/100);
            }
        });
        return Book;
    }
);