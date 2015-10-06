define(function(require, exports, module) {
    return {
        STATES: ["Отменен", "Отправлен курьерской службой", "Выполнен"],
        CLASS_STATES: ["cancelledOrder", "currentOrder", "completedOrder"],
        PICTURE_STATES:["images/cancelled-icon.png", "images/car-icon.png", "images/delivered-icon.png"],
        PAYMENT_METHODS: ["Наличными при получении", "Безналичными"],
        DELIVERY_METHOD: ["Курьером лично в руки", "Самовывоз"],
        ARROW_IMAGE: ["images/expand-opened-icon.png", "images/expand-closed-icon.png"]
    };
});