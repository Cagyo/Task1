define(["jquery","underscore","backbone","book"],function($,_,Backbone,Book){

        //var initialize = function() {
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
                    items: []
                },
                setState: function(state){
                    this.state = state;
                },

                toggleDisplay: function(){
                    this.display = true;
                },

                getSum: function(){
                    var sum = 0;
                    _.forEach(this.attributes.items, function (item) {
                        sum += item.get("price");
                    });
                    return sum;
                },

                orderFinished: function () {
                    this.set("summary",this.getSum());
                },

                addBook: function (bookInformation) {
                    this.attributes.items.push(new Book(bookInformation));
                },

                validate: function(attributes){
                    if(attributes.summary < 0)
                        return "Error! Summary less than 0.";
                },

                initialize: function(){
                    this.on('change:display', function (e) {
                        console.log(e);
                    });
                    this.on("invalid", function(model, error){
                        alert( error );
                    });
                    //this.bind('validated:invalid', function(model, errors) {
                    //    // do something
                    //    alert( error );
                    //});
                }
            });


            //var orders = new Orders();

            //var usrModel = new UserModel();
            //console.log(usrModel.get("name"));
            //usrModel.changeName("qwerty");
            //console.log(usrModel.get("name"));
            //usrModel.set({name:'qwerty', action: 'default',id:-100});
        //};
        return Order;//{initialize: initialize};
    }
);