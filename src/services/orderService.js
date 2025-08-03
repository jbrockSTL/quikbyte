const { applyPromo } = require('./promoEngine');
const { calculateETA } = require('./etaCalculator');

function createOrder(customer, items, promoCode) {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

    let order = {
        customerId: customer.id,
        items,
        subtotal,
        discount: 0,
        distanceKm: customer.distanceKm,
        trafficLevel: customer.trafficLevel,
        driverAvailable: customer.driverAvailable
    };

    if (promoCode) {
        order = applyPromo(order, promoCode);
    }

    order = calculateETA(order);
    return order;
}

module.exports = { createOrder };