define(["jquery","underscore","backbone","book","books"],function($,_,Backbone,Book, Books){

            var Order = Backbone.Model.extend({
                validate:true,
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
                    fields: ["state","state","state","paymentMethod","deliveryMethod","display"],
                    strings: []

                },
                setState: function(state){
                    //todo: if state in STATES
                    this.state = state;
                },

                toggleDisplay: function(){
                    this.display = true;
                },

                getOrderSummmary: function(){
                    var orderSummary = this.get("items").reduce(function(orderSummary, item){
                        return orderSummary + item.get("price") - item.get("price")*item.get("discount")/100;
                    }, 0);
                    return orderSummary + this.get("priceDelivery");
                },

                orderFinished: function () {
                    this.set("summary",this.getOrderSummmary());
                },

                addBook: function (bookInformation) {
                    this.get("items").add(bookInformation);
                },

                prepareStrings: function () {
                    this.set("strings", []);
                    this.values = _.map(CONSTANTS, function (constant, i) {
                        this.get("strings").push(constant[this.get(this.get("fields")[i])]);
                    }.bind(this));
                    //debugger;
                },

                validate: function(attributes){
                    if(attributes.summary < 0)
                        return "Error! Summary less than 0.";
                },

                initialize: function(){
                    //this.on('change:display', function (e) {
                    //    console.log(e);
                    //});
                    this.prepareStrings();
                    this.on("invalid", function(model, error){
                        alert( error );
                    });
                }
            });
        return Order;
    }
);