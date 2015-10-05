define(["jquery","underscore","backbone","order","books","otherConstants"],function($,_,Backbone,Order, Books, constants) {
    return Backbone.Collection.extend({
        model: Order,
        url: 'json/v2/orders.json',

        initialize: function () {
            this.on( "change:"+constants.ORDER_DISPLAY_FIELD, this.hideAll, this);
        },

        hideAll: function (currentModel) {

                this.models.map(function (order) {
                    if(currentModel.get("id") !== order.get("id"))
                        order.set(constants.ORDER_DISPLAY_FIELD, "none",{ "silent": true });

                    if(order.get("displaySet") === true)
                        order.set("displaySet", false);
                    else
                        order.set("displaySet", true);
                });

        },

        filterByState: function(state){
            return this.filter(function(order) {
                return order.get("state") === state;
            });
        }
        /*fillFromJSON: function (json) {
            for(var i =0; i<json.orders.length; i++)
            {
                var currentOrder=JSON.parse(JSON.stringify(json.orders[i]));
                currentOrder.items = new Books;
                currentOrder.id = i+1;
                currentOrder.displaySet = false;
                this.add(currentOrder,{validate:true});
                _.map(json.orders[i].items,function(item, key){
                    this.get(i+1).addBook(item);
                },this);
                this.get(i+1).orderFinished();
            }
        },*/

    });
});