define(["jquery","underscore","hbs!templates/filterOrderList","handlebars","orderView","marionette_node","radio"],function($,_,templateFile, Handlebars,OrderView,Marionette,Radio) {
    var userChannel = Radio.channel('user');
    var OrderListView = Marionette.CompositeView.extend({
        el: '#application',
        template: templateFile,
        orderViews: [],
        childView: OrderView,
        childViewContainer: '#ordersSection',
        //initialCollection: null,
        childViewOptions: function (model) {
            //debugger;
            return { collection: model.get("items") };
        },
        initialize: function() {
           // this.initialCollection = this.collection.clone();

            //userChannel.on('some:event', function(e) {
            //    var state = userChannel.request('some:request');
            //    if(state !== -1)
            //        var filteredCollection = this.initialCollection.filterByState(state);
            //    else
            //        filteredCollection = this.initialCollection.clone();
            //    this.collection.reset();
            //    filteredCollection.map(function (item) {
            //        this.collection.add(item);
            //    },this);
            //}.bind(this));
        },
        events:{
            'click h2': 'filterOrders'
        },

        filterOrders: function(e){
            //var state = -1;
            //if (e.currentTarget.id === 'cancelledOrders') {
            //    state = 0;
            //}
            //else if (e.currentTarget.id === 'currentOrders') {
            //    state = 1;
            //}
            //else if (e.currentTarget.id === 'completedOrders') {
            //    state = 2;
            //}
            //
            //var filteredOrders = this.collection.filterByState(state);
            //if(state === -1) {
            //    filteredOrders = this.collection;
            //}
            //userChannel.reply('some:request', state);
            //userChannel.trigger('some:event');

            //send order state of selected filter
            var state;
            _.map(FILTER_CLASS_STATES, function (stateClass, key) {
                if (stateClass === e.currentTarget.id) {
                    state = Number(key);
                }
            });

            this.trigger("filterApplied",state);
            this.markSelectedFilter(e.currentTarget);
        },

        markSelectedFilter: function(element) {

            _.map(this.$el.find("h2"),function (filter, key){
                $("#"+filter.id).children("a:eq(0)").attr("class","selectedFilterItemUnderlined")
            });
            $("#"+element.id).children("a:eq(0)").attr("class","selectedFilterItem");
        },

        beforeRender: function() {
            //$("#orderList").empty();
        }
    });
    return OrderListView;
});
