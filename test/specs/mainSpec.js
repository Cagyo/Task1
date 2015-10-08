define(["chai","sinon","orders","books"], function (chai, sinon, Orders, Books) {
    var json = {"orders": [
        {
            "orderNumber": "0570",
            "date": "06.06.2015",
            "state": 0,
            "name": "Vasiliy",
            "address": "?. ????, ??. ?????????????, 65, ??. 11",
            "telephone": "+38 050 123-45-56",
            "paymentMethod": 0,
            "display": false,
            "summary": 182,
            "priceDelivery": 20,
            "receivedBonuses": 38,
            "currency": "???",
            "deliveryMethod": 0,
            "items": [
                {
                    "title": "??????? c ??????????? ???????",
                    "author": "???? ???????",
                    "price": 138,
                    "currency": "???",
                    "discount": 0,
                    "isBook": true,
                    "pictureUrl": "images/itemone.png",
                    "count": 1
                },
                {
                    "title": "???????, ??????? ???????? ????????? ????? ",
                    "author": "???? ???????",
                    "price": 170,
                    "currency": "???",
                    "discount": 20,
                    "isBook": true,
                    "pictureUrl": "images/itemtwo.png",
                    "count": 1
                },
                {
                    "title": "?? ?????",
                    "author": "?????",
                    "price": 138,
                    "currency": "???",
                    "discount": 0,
                    "isBook": false,
                    "pictureUrl": "images/itemone.png",
                    "count": 1
                },
                {
                    "title": "??????? c ??????????? ???????",
                    "author": "???? ???????",
                    "price": 138,
                    "currency": "???",
                    "discount": 0,
                    "isBook": true,
                    "pictureUrl": "images/itemone.png",
                    "count": 1
                }
            ]
        }]};
    sinon.stub($, 'getJSON').returns({done: sinon.stub().callsArgWith(0, json)});
    before(function () {
        this.orders = new Orders();
        var json = $.getJSON("json/orders.json").done(function (json) {
            this.orders.fillFromJSON(json);
        }.bind(this));
    });
    describe("Simple Test", function() {

        it("Multiply", function() {
            chai.assert.equal(multiply(2, 3), 6);
        });
        it("Multiply with 0", function() {
            chai.assert.equal(multiply(0, 3), 0);
        });

    });

    describe("Test with sinon", function() {

        it("Test with sinon", function() {

            chai.assert.equal(0, 0);
        });

    });

    describe("Test with sinon and order sum", function() {

        it("Order sum", function() {
            var order = this.orders.get("c1");
            chai.assert.equal(order.getOrderSummmary(), 570);
        });

    });
});