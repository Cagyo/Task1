define(["jquery","underscore","hbs!templates/order","bookView","bookListView","marionette_node"],function($,_,templateFile, BookView,BookListView, Marionette) {
    var OrderView = Marionette.ItemView.extend({
        template: templateFile,
        initialize: function(){
            //this.render();
            this.listenTo(this.model, 'change:displaySet', this.render);
        },

        //hideAll: function (e) {
        //    console.log("collection");
        //    console.log(e);
        //},
        orderId: -1,
        changeDisplay: function (e) {
            if(this.model.get(ORDER_DISPLAY_FIELD) !== "block")
            {
                this.model.set(ORDER_DISPLAY_FIELD,"block");
            }
            else
            {
                this.model.set(ORDER_DISPLAY_FIELD,"none");
            }
            this.render();
        },

        events: {
            'click .row': 'changeDisplay'
        },
        //reRender: function(e){
        //    this.render();
        //},
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            var id = this.model.get("id");
            this.orderId = _.clone(id);
            var element = this.$el.find('#items-list-'+id);
            var view = new BookListView({collection: this.model.get("items")});
            view.render();
            element.append(view.el);
            //this.model.get("items").map(function(item, key){
            //    var element = this.$el.find('#items-list-'+id);
            //    var node = new BookView({model: item.toJSON()});
            //    node.render();
            //    element.append(node);
            //},this);
            return this;
        }
    });
    return OrderView;
});