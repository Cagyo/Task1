define(["jquery","underscore","backbone","order","books"],function($,_,Backbone,Order, Books) {
    var Orders = Backbone.Collection.extend({
        model: Order,
        initialize: function () {
            this.on( "change:"+ORDER_DISPLAY_FIELD, this.hideAll, this);
        },
        hideAll: function (currentModel) {
            //console.log("collection");

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
            //var data;
            //$.ajaxSetup({
            //    async: false
            //});

            //function getOrders(){
            //    return $.getJSON(jsonFileUrl);
            //}


            //var json;
            //$.getJSON(jsonFileUrl, data, function(result) {
            //    json = result;
            //});
            //
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



                //return data;


            //function getOrders(){
            //    return $.getJSON(jsonFileUrl);
            //}
            //
            //getOrders().done(function (data) {
            //    for(var i =0; i<data.length; i++)
            //    {
            //        var currentOrder=JSON.parse(JSON.stringify(data.orders[i]));
            //        currentOrder.items = new Books;
            //        currentOrder.id = i+1;
            //        currentOrder.displaySet = false;
            //        this.add(currentOrder,{validate:true});
            //        _.forEach(json.orders[i].items,function(item){
            //            this.get(i+1).addBook(item);
            //        },this);
            //        this.get(i+1).orderFinished();
            //    }
            //    return data;
            //});



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