define(["jquery","underscore"],function($,_){
    var Worker = function (){};
    var cancelledOrderSection = 'cancelledOrderSection';
    var currentOrderSection = 'currentOrderSection';
    var completedOrderSection = 'completedOrderSection';
    var allOrderString = "allOrders";
    var currentOrdersClass = "currentOrders";
    var completedOrdersClass = "completedOrders";
    var cancelledOrdersClass = "cancelledOrders";
    var closedIcon = "images/expand-closed-icon.png";
    var openedIcon = "images/expand-opened-icon.png";

    showHideSections = function(orderState) {
        function setDisplay(section, value) {
            section.style.display = value;
        }
        function hideSection(sectionName) {
            _.each($('.' + sectionName),function (section) {
                setDisplay(section, 'none');
            })
        }
        function showSection(sectionName) {
            _.each($('.' + sectionName),function (section) {
                setDisplay(section, 'inline');
            })
        }

        if (orderState === completedOrdersClass) {
            hideSection(cancelledOrderSection);
            hideSection(currentOrderSection);
            showSection(completedOrderSection);
        }
        else if (orderState === currentOrdersClass) {
            hideSection(cancelledOrderSection);
            showSection(currentOrderSection);
            hideSection(completedOrderSection);
        }
        else if (orderState === cancelledOrdersClass) {
            showSection(cancelledOrderSection);
            hideSection(currentOrderSection);
            hideSection(completedOrderSection);
        }
        else {
            showSection(cancelledOrderSection);
            showSection(currentOrderSection);
            showSection(completedOrderSection);
        }
    }

    Worker.prototype.filterList = function() {
        if (this.id === allOrderString) {
            showHideSections(allOrderString);
        }
        else if (this.id === currentOrdersClass) {
            showHideSections(currentOrdersClass);
        }
        else if (this.id === completedOrdersClass) {
            showHideSections(completedOrdersClass);
        }
        else {
            showHideSections(cancelledOrdersClass);
        }
        var filters = $("h2");

        function setUnderline(filter){
            $("#"+filter.id).children("a:eq(0)").attr("class","selectedFilterItemUnderlined")
        }

        _.each(filters,setUnderline);
        $("#"+this.id).children("a:eq(0)").attr("class","selectedFilterItem");
    }

    Worker.prototype.hideOrderInfo = function() {
        var fullInfoSection = $('#full' + this.id)[0];
        if (fullInfoSection) {
            if (fullInfoSection.style.display !== "" && fullInfoSection.style.display !== "none") {
                $('#full' + this.id).hide(500);
                $('#arrow' + this.id)[0].src = closedIcon;
            }
            else {
                $('.fullOrderInfo').hide();
                $('#full' + this.id).show(500);
                var icons = $('.openCloseIcon');
                _.each(icons,function(icon){
                    icon.src = closedIcon;
                });
                $('#arrow' + this.id)[0].src = openedIcon;
            }
        }
    }

    return Worker;
});
