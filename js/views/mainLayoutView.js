define(function(require, exports, module) {
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette");
    var template = require("hbs!templates/mainLayoutView");
    var MainView = require("mainView");
    var _ = require("underscore");
    var $ = require("jquery");

    module.exports = Marionette.LayoutView.extend({
        el: "#application",
        template: template,
        regions: {
            filter: "#filter-block",
            orderList: "#orderList"
        }
    });
});