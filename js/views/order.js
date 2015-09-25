define(["jquery","underscore","backbone","hbs!templates/order","bookView",'worker',"hbs/handlebars","templates/helpers/getClassState"],function($,_,Backbone,templateFile, BookView, Worker, Handlebars, getClassState) {
    var OrderView = Backbone.View.extend({
        template: templateFile,
        initialize: function(){
            var x = getClassState(0);
            this.render();
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
            'click': 'changeDisplay' //todo: clicks handler only on short orders
        },
        reRender: function(e){
            this.render();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            var id = this.model.attributes.id;
            this.orderId = _.clone(id);
            this.model.attributes.items.forEach(function(item){

                var element = $('#items-list-'+id);
                var node = new BookView({model: item.toJSON()});
                    element.append(node.el);
            });
            return this;
        }
    });
    return OrderView;
});