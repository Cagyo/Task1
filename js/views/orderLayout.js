define(["jquery","underscore","hbs!templates/orderLayout","handlebars","views/shortOrder","views/fullOrder","marionette_node"],function($,_,templateFile, Handlebars,shortOrderView,fullOrderView,Marionette) {
    var OrderLayoutView = Marionette.CompositeView.extend({
        template: templateFile,
        //regions: {
        //    shortOrder  : '#shortOrder',
        //    fullOrder : '#fullOrder'
        //},
        orderViews: [],
        initialize: function(){
        //this.render();
        },

        beforeRender: function () {
            this.id = this.model.get("id");
            this.display = this.model.get("display");
        },

        onRender: function () {
            this.$el.html(this.template());
            //this.addRegion('#shortOrder'+this.model.get("id"));
            //this.addRegion('#fullOrder'+this.model.get("id"));
            $("#orderList").empty();
            $("#orderList").append(this.el);

            //orderViews = [];

            //this.collection.map(function(order, key){
            //var orderView = new shortOrderView({model: this.model}).render();
            //this.getRegion('shortOrder').show(orderView);
            //
            //var fullOrderView1 = new fullOrderView({model: this.model}).render();
            //this.getRegion('fullOrder').show(fullOrderView1);
            //});

            //_.map(orderViews, function (orderView, key) {
            //orderView;
            //$('#order').append(orderView.el);
            //});
            //return this;
        }
});
return OrderLayoutView;
});
