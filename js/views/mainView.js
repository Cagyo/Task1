define(["jquery","underscore","hbs!templates/mainView","handlebars","orderView","marionette_node","radio"],function($,_,templateFile, Handlebars,OrderView,Marionette,Radio) {
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

        },
        events:{
            'click @ui.button': 'filterOrders'
        },

        ui: {
            button: ".filter"
        },

        filterOrders: function(e){

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

            //_.map(this.$el.find("h2"),function (filter, key){
            _.map(this.ui.button,function (filter){
                $("#"+filter.id).children("a:eq(0)").attr("class","selectedFilterItemUnderlined");
            });
            $("#"+element.id).children("a:eq(0)").attr("class","selectedFilterItem");
        },

        beforeRender: function() {
            //$("#orderList").empty();
        }
    });
    return OrderListView;
});
