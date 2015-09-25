define(["jquery","underscore","backbone","order","books"],function($,_,Backbone,Order, Books) {
    var Orders = Backbone.Collection.extend({
        model: Order,
        initialize: function () {
            this.on( "change:display", this.hideAll, this);
        },
        mode: 0,
        counter: 0,
        hideAll: function (currentModel) {
            console.log("collection");

                this.models.forEach(function (model) {
                    if(currentModel.get("id") !== model.get("id"))
                        model.attributes.display = "none";
                    if(model.get("displaySet") === true)
                        model.set("displaySet", false);
                    else
                        model.set("displaySet", true);
                });

        },
        fillFromJSON: function (jsonFileUrl) {
            var data;
            $.ajaxSetup({
                async: false
            });

            var json;
            $.getJSON(jsonFileUrl, data, function(result) {
                json = result;
            });

            for(var i =0; i<json.orders.length; i++)
            {
                var currentOrder=JSON.parse(JSON.stringify(json.orders[i]));
                currentOrder.items = new Books;
                currentOrder.id = i+1;
                currentOrder.displaySet = false;
                this.add(currentOrder,{validate:true});
                _.forEach(json.orders[i].items,function(item){
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