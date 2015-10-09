define(function (require, exports, module) {//["chai","sinon","orders","books"], function (chai, sinon, Orders, Books) {
    var chai = require("chai"),
        sinon = require("sinon"),
        Orders = require("orders"),
        Books = require("books"),
        OrderListView = require("orderListView"),
        mainController = require("mainController"),
        booksMock = require("booksMock"),
        ordersMock = require("ordersMock");
    var assert = chai.assert,
        expect = chai.expect;
        //to = chai.to,
        //exist = chai.exist;


    var json = {"orders": [{ "orderNumber": "0570", "date": "06.06.2015", "state": 0, "name": "Vasiliy", "address": "г. Киев, ул. Саксаганского, 65, кв. 11", "telephone": "+38 050 123-45-56", "paymentMethod": 0, "display": false, "summary": 182, "priceDelivery": 20, "receivedBonuses": 38, "currency": "грн", "deliveryMethod": 0, "items": [{ "title": "Девушка c татуировкой дракона", "author": "Стиг Ларссон", "price": 138, "currency": "грн", "discount": 0, "isBook": true, "pictureUrl": "images/itemone.png", "count": 1}, { "title": "Девушка, которая взрывала воздушные замки ", "author": "Стиг Ларссон", "price": 170, "currency": "грн", "discount": 20, "isBook": true, "pictureUrl": "images/itemtwo.png", "count": 1}, { "title": "Не книга", "author": "Автор", "price": 138, "currency": "грн", "discount": 0, "isBook": false, "pictureUrl": "images/itemone.png", "count": 1}, { "title": "Девушка c татуировкой дракона", "author": "Стиг Ларссон", "price": 138, "currency": "грн", "discount": 0, "isBook": true, "pictureUrl": "images/itemone.png", "count": 1 }]}]};
    sinon.stub($, 'getJSON').returns({done: sinon.stub().callsArgWith(0, json)});
    before(function () {
        this.orders = new Orders();
        var json = $.getJSON("json/orders.json").done(function (json) {
            this.orders.fillFromJSON(json);
        }.bind(this));

        this.server = sinon.fakeServer.create();
        this.server.autoRespond = true;
        this.server.respondWith("GET", "/json/v2/orders.json",
            [ 200, {"Content-Type":"application/json"},JSON.stringify(ordersMock) ]);



    });

    describe("Views", function() {

        it("Views do not throw exceptions", function() {
            var orders = new Orders(json);
            this.view = null;
            //var callback = sinon.spy();
            //Backbone.listenTo(this.view,"onRender",callback);

            var createView = function(){
                var orderListView = new OrderListView();
                orderListView.render();
            };
            expect(createView).to.not.throw(Error);

            //this.view.render({collection:orders});
            //assert(callback.calledOnce, true);
            //expect(this.view.$el).ok;
            //var res = view.render();
            //expect(res).to.not.throw("");



        });
        it('should render', function () {
            var orders = new Orders(json);
            this.view = new OrderListView();
            this.view.render({collection:orders});
            expect(this.view.$el).ok;

        });



    });

    describe("Sinon with collections", function() {

        it("Test with sinon fakeServer and request to server in orders", function() {

            this.orders2 = new Orders();
            this.orders2.fetch();
            //this.clock = sinon.useFakeTimers();
            //this.clock.tick(200);
            //setTimeout(function () {
            expect(this.server.requests.length).equal(1);
            expect(this.server.requests[0].method)
                .equal("GET");
            expect(this.server.requests[0].url)
                .equal("json/v2/orders.json");
            //expect(this.orders2.get("c1")).exist;
            //}.bind(this),200);


        });

        it("Order sum", function() {
            var order = this.orders.get("c1");
            chai.assert.equal(order.getOrderSummmary(), 570);
        });

        it("Test sum in book with discount", function() {
            var books = new Books(booksMock);
            var book = books.at(1);
            book.calculatePriceWithDiscount();
            chai.assert.equal(book.get("priceWithDiscount"), 136);
            expect(book.get("priceWithDiscount")).to.be.a('Number');
        });

        it("Test sum in book without discount", function() {
            var books = new Books(booksMock);
            var book = books.at(0);
            book.calculatePriceWithDiscount();
            chai.assert.equal(book.get("priceWithDiscount"), 138);
            expect(book.get("priceWithDiscount")).to.be.a('Number');
        });

    });

    describe("Views", function() {

        it("Views do not throw exceptions", function() {

        });
        it('should render', function () {

        });

    });
});