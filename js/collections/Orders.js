define(["jquery","underscore","backbone","order","books","otherConstants"],function($,_,Backbone,Order, Books, constants) {
    var Orders = Backbone.Collection.extend({
        model: Order,
        url: 'json/v2/orders.json',
        initialize: function () {
            this.on( "change:"+constants.ORDER_DISPLAY_FIELD, this.hideAll, this);
        },
        hideAll: function (currentModel) {

                this.models.map(function (model, key) {
                    if(currentModel.get("id") !== model.get("id"))
                        model.set(constants.ORDER_DISPLAY_FIELD, "none",{ "silent": true });

                    if(model.get("displaySet") === true)
                        model.set("displaySet", false);
                    else
                        model.set("displaySet", true);
                });

        },
        filterByState: function(state){
            var filteredCollection = this.filter(
                function(order) {
                    return order.get("state") === state;
                });
            return filteredCollection;
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
    return Orders;
});