define(function(require, exports, module){
        var Backbone = require("backbone"),
        _ = require("underscore"),
        Books = require("books"),
        CONSTANTS = require("orderConstants");
        Object.freeze(CONSTANTS);

        module.exports = Backbone.Model.extend({
                defaults: {
                    orderNumber: "",
                    date: "01.01.2015",
                    state: 2,
                    name: "",
                    address: "",
                    telephone: "",
                    paymentMethod: 0,
                    display: false,
                    displaySet: false,
                    summary: 0,
                    priceDelivery: 0,
                    receivedBonuses: 0,
                    items: new Books,
                    deliveryMethod: 0,
                    stringFields: {
                        STATES: "state",
                        CLASS_STATES:"state",
                        PICTURE_STATES: "state",
                        PAYMENT_METHODS:"paymentMethod",
                        DELIVERY_METHOD: "deliveryMethod",
                        ARROW_IMAGE: "display"
                    },
                    strings: []
                },
                setState: function(state){
                    this.state = state;
                },

                toggleDisplay: function(){
                    this.display = true;
                },

                getOrderSummmary: function(){
                    var orderSummary = this.get("items").reduce(function(orderSummary, item){
                        return orderSummary + (item.get("price") - item.get("price") * item.get("discount") / 100) * item.get("count");
                    }, 0);
                    return orderSummary + this.get("priceDelivery");
                },

                orderFinished: function () {
                    this.set("summary", this.getOrderSummmary());
                },

                addBook: function (bookInformation) {
                    this.get("items").add(bookInformation);
                },

                prepareStrings: function () {
                    this.set("strings", []);
                    this.values = _.map(CONSTANTS, function (constant, i, key) {
                        var fieldName = this.get("stringFields")[i];
                        var fieldValue = this.get(fieldName);
                        this.get("strings").push(constant[fieldValue]);
                    }.bind(this));
                },

                validate: function(attributes){
                    if(attributes.summary < 0)
                        return "Error! Summary less than 0.";
                },

                initialize: function(){
                    this.prepareStrings();
                    this.on("invalid", function(model, error){
                        alert(error);
                    });
                }
            });
    }
);