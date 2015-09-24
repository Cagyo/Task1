define(["jquery","underscore","backbone","text!templates/order.html","bookView",'worker',"handlebars"],function($,_,Backbone,templateFile, BookView, Worker, Handlebars) {
    Handlebars.registerHelper('getClassState', function(state) {
        if(state === 0) {
            return "cancelledOrder";
        }
        else if(state === 1){
            return "currentOrder";
        }
        else {
            return "completedOrder";
        }
    });
    Handlebars.registerHelper('getPictureState', function(state) {
        if(state === 0) {
            return "images/cancelled-icon.png";
        }
        else if(state === 1){
            return "images/car-icon.png";
        }
        else {
            return "images/delivered-icon.png";
        }
    });
    Handlebars.registerHelper('getTextState', function(state) {
        if(state === 0) {
            return "Отменен";
        }
        else if(state === 1){
            return "Отправлен в курьерскую службу";
        }
        else {
            return "Завершен";
        }
    });
    Handlebars.registerHelper('getPaymentMethod', function(state) {
        if(state === 0) {
            return "Наличными при получении";
        }
        else {
            return "Безналичными";
        }
    });
    var OrderView = Backbone.View.extend({
        template: Handlebars.compile(templateFile),
        initialize: function(){

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
                this.model.set("display","block");
            else
                this.model.set("display","none");
            this.render();
        },

        events: {
            'click': 'changeDisplay'
        },
        reRender: function(e){
            this.render();
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            var id = this.model.attributes.id;
            this.orderId = _.clone(id);
            _.forEach(this.model.attributes.items, function(item){

                var element = $('#items-list-'+id);
                var node = new BookView({model: item});
                    element.append(node.el);
            });
            //this.delegateEvents();
            return this;
        }
    });
    return OrderView;
});