define(["jquery","underscore","hbs!templates/filter","handlebars","orderListView","marionette_node","orderListView","radio"],function($,_,templateFile, Handlebars, OrderListView, Marionette, OrderListView, Radio) {
    var userChannel = Radio.channel('user');
    var FilterView = Marionette.ItemView.extend({
        template: templateFile,
        //filters: null,
        //initialize: function(){
        //    //this.render();
        //},

        events:{
            'click h2': 'filterOrders'
        },

        filterOrders: function(e){


            var state = -1;
            if (e.currentTarget.id === 'cancelledOrders') {
                state = 0;
            }
            else if (e.currentTarget.id === 'currentOrders') {
                state = 1;
            }
            else if (e.currentTarget.id === 'completedOrders') {
                state = 2;
            }

            var filteredOrders = this.collection.filterByState(state);
            if(state === -1) {
                filteredOrders = this.collection;
            }
            userChannel.reply('some:request', state);
            userChannel.trigger('some:event');
            //$('#ordersSection').empty();
            //var view = new OrderListView({collection: filteredOrders}).render();
            //orderListView
            //this.globalView.getRegion('orderList').show(view);

            this.markSelectedFilter(e.currentTarget);
        },

        markSelectedFilter: function (element) {
            _.map(this.$el.find("h2"),function (filter, key){
                $("#"+filter.id).children("a:eq(0)").attr("class","selectedFilterItemUnderlined")
            });
            $("#"+element.id).children("a:eq(0)").attr("class","selectedFilterItem");
        },

        onRender: function () {
            //this.setHandlers();

        }

        //setHandlers: function(){
        //    this.filters = this.$el.find("h2");
        //    _.map(this.filters, function(filter, key){
        //        $(filter).on("click", this.filterOrders);
        //    },this);
        //}
    });
    return FilterView;
});