define(["jquery","underscore","hbs!templates/orderView","bookListView","marionette_node","otherConstants"],function($,_,templateFile,BookView, Marionette,CONSTANTS) {
    var OrderView = Marionette.CompositeView.extend({
        template: templateFile,
        childView: BookView,
        orderId: -1,

        initialize: function() {
            this.listenTo(this.model, 'change:displaySet', this.render);
            //this.collection = this.model.get("items");
            this.childViewContainer = '#items-list-'+this.model.get("id");
        },

        changeDisplay: function (e) {
            if(this.model.get(CONSTANTS.ORDER_DISPLAY_FIELD) !== "block") {
                this.model.set(CONSTANTS.ORDER_DISPLAY_FIELD,"block");
            }
            else {
                this.model.set(CONSTANTS.ORDER_DISPLAY_FIELD,"none");
            }
        },

        events: {
            'click .row': 'changeDisplay'
        }
    });
    return OrderView;
});