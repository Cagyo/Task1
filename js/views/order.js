define(["jquery","underscore","backbone","text!templates/order.html","bookView",'worker'],function($,_,Backbone,templateFile, BookView, Worker) {
    var OrderView = Backbone.View.extend({
        //model: null,
        template: _.template(templateFile),
        initialize: function(){

            this.render();
            //this.listenTo(this.model, 'change:display', this.testMethod());
            //this.on( "change:display", this.hideAll, this.model);
            this.listenTo(this.model, 'change:display', this.testMethod());
            //this.model.on('change:display', this.render, this);
        },
        hideAll: function (e) {
            console.log("collection");
            console.log(e);
        },
        orderId: -1,
        changeDisplay: function (e) {
            if(this.model.get("display") !== "block")
                this.model.set("display","block");//attributes.display = true;
            else
                this.model.set("display","none");//attributes.display = true;
            this.render();
            //$('#ordersSection').append(this.el);
        },

        events: {
            'click': 'changeDisplay'

        },
        testMethod: function(e){
            //alert("worked!")
            console.log("testMethod");
        },
        render: function(){
            //var itemsNodeList;
             //$('#ordersSection').append(this.template(this.model.toJSON()));
            this.$el.html(this.template(this.model.toJSON()))
            var id = this.model.attributes.id;
            this.orderId = _.clone(id); //todo: replace with normal clone
            _.forEach(this.model.attributes.items, function(item){

                var element = $('#items-list-'+id);
                var node = new BookView({model: item});
                    element.append(node.el);
            });
            this.delegateEvents();
            return this;

        },
        setHandlers: function(){
            var worker = new Worker();
            function hideSection (section) {
                    section.onclick = worker.hideOrderInfo
                };

                //_.each($('.currentOrderSection'),hideSection);
                //_.each($('.completedOrderSection'),hideSection);
                //_.each($('.cancelledOrderSection'),hideSection);
        }
    });
    return OrderView;
});