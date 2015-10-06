define(function(require, exports, module){
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette");
    var template = require("hbs!templates/mainView");
    var OrderView = require("orderView");
    var CONSTANTS = require("otherConstants");
    Object.freeze(CONSTANTS);
    var _ = require("underscore");
    var $ = require("jquery");

    module.exports = Marionette.CompositeView.extend({
        el: '#application',
        template: template,
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
            _.map(CONSTANTS.FILTER_CLASS_STATES, function(stateClass, key) {
                if (stateClass === e.currentTarget.id) {
                    state = Number(key);
                }
            });

            this.trigger("filterApplied", state);
            this.markSelectedFilter(e.currentTarget);
        },

        markSelectedFilter: function(element) {
            _.map(this.ui.filterButton, function(filter) {
                $(filter).children("a:eq(0)").attr("class", "selected-filter-item-underlined");
                if(filter.id === element.id) {
                    $(filter).children("a:eq(0)").attr("class", "selected-filter-item");
                }
            });
        }
    });
});
