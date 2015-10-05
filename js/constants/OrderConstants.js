define([], function() {

    return [
        STATES = {0: "Отменен", 1: "Отправлен курьерской службой", 2: "Выполнен"},
        CLASS_STATES = {0: "cancelledOrder", 1: "currentOrder", 2: "completedOrder"},
        PICTURE_STATES = {0: "images/cancelled-icon.png", 1: "images/car-icon.png", 2: "images/delivered-icon.png"},
        PAYMENT_METHODS = {0: "Наличными при получении", 1: "Безналичными"},
        DELIVERY_METHOD = {0: "Курьером лично в руки", 1: "Самовывоз"},
        ARROW_IMAGE = {0: "images/expand-opened-icon.png", 1: "images/expand-closed-icon.png"}
    ];

});