define(["jquery","underscore","hbs!templates/order","bookListView","marionette_node"],function($,_,templateFile,BookListView, Marionette) {
    var OrderView = Marionette.CompositeView.extend({
        template: templateFile,
        childView: BookListView,
        orderId: -1,

        initialize: function(){
            this.listenTo(this.model, 'change:displaySet', this.render);
            this.collection = this.model.get("items");
            this.childViewContainer = '#items-list-'+this.model.id;
        },

        changeDisplay: function (e) {
            if(this.model.get(ORDER_DISPLAY_FIELD) !== "block")
            {
                this.model.set(ORDER_DISPLAY_FIELD,"block");
            }
            else
            {
                this.model.set(ORDER_DISPLAY_FIELD,"none");
            }
        },

        events: {
            'click .row': 'changeDisplay'
        }
    });
    return OrderView;
});