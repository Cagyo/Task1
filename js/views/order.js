define(["jquery","underscore","backbone","hbs!templates/order","bookView"],function($,_,Backbone,templateFile, BookView) {
    var OrderView = Backbone.View.extend({
        template: templateFile,
        initialize: function(){
            //this.render();
            this.listenTo(this.model, 'change:displaySet', this.reRender);
        },

        hideAll: function (e) {
            console.log("collection");
            console.log(e);
        },
        orderId: -1,
        changeDisplay: function (e) {
            if(this.model.get("display") !== "block")
            {
                this.model.set("display","block");
            }
            else
            {
                this.model.set("display","none");
            }
            this.render();
        },

        events: {
            'click .row': 'changeDisplay'
        },
        reRender: function(e){
            this.render();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            var id = this.model.get("id");
            this.orderId = _.clone(id);
            this.model.get("items").map(function(item, key){
                var element = this.$el.find('#items-list-'+id);
                var node = new BookView({model: item.toJSON()});
                node.render();
                    element.append(node.el);
            },this);
            return this;
        }
    });
    return OrderView;
});