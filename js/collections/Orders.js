define(["jquery","underscore","backbone","order","books"],function($,_,Backbone,Order, Books) {
    var Orders = Backbone.Collection.extend({
        model: Order,
        url: 'https://api.myjson.com/bins/3xzbm',
        initialize: function () {
            this.on( "change:"+ORDER_DISPLAY_FIELD, this.hideAll, this);
        },
        hideAll: function (currentModel) {

                this.models.map(function (model, key) {
                    if(currentModel.get("id") !== model.get("id"))
                        model.set(ORDER_DISPLAY_FIELD, "none",{ "silent": true });

                    if(model.get("displaySet") === true)
                        model.set("displaySet", false);
                    else
                        model.set("displaySet", true);
                });

        },
        fillFromJSON: function (json) {
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
        },
        filterByState: function(state){
            var res = this.filter(
                function(order) {
                    return order.get("state") === state;
                });
            return res;
        }
    });
    return Orders;
});