define(["jquery","underscore","backbone","order"],function($,_,Backbone,Order) {
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
        filterByState: function(state){
            var res = this.filter(
                function(order) {
                    return order.get("state") === state;
                });
            return res;
            //var result = _.where(orders, {state: 0})

        }
    });
    return Orders;
});