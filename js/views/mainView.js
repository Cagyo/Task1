define(["jquery","underscore","hbs!templates/mainView","orderView","marionette_node","otherConstants"],function($,_, templateFile, OrderView, Marionette,CONSTANTS) {
    //var userChannel = Radio.channel('user');
    return Marionette.CompositeView.extend({
        el: '#application',
        template: templateFile,
        orderViews: [],
        childView: OrderView,
        childViewContainer: '#ordersSection',

        childViewOptions: function (model) {
            return { collection: model.get("items") };
        },

        initialize: function() {

        },

        events:{
            'click @ui.filterButton': 'filterOrders'
        },

        ui: {
            filterButton: ".filter"
        },

        filterOrders: function(e){

            var state;
            _.map(CONSTANTS.FILTER_CLASS_STATES, function (stateClass, key) {
                if (stateClass === e.currentTarget.id) {
                    state = Number(key);
                }
            });

            this.trigger("filterApplied", state);
            this.markSelectedFilter(e.currentTarget);
        },

        markSelectedFilter: function(element) {
            _.map(this.ui.filterButton, function (filter) {
                $(filter).children("a:eq(0)").attr("class","selected-filter-item-underlined");
            });
            var x =  $("#"+element.id).children("a:eq(0)");
            x.attr("class","selected-filter-item");
        }
    });
});
