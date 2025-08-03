// Applies promo codes to an order
function applyPromo(order, promoCode) {
    if (!promoCode || !promoCode.isActive) {
        return { ...order, discount: 0, message: "Promo not valid" };
    }

    let discount = 0;
    if (promoCode.type === "PERCENT") {
        discount = order.subtotal * (promoCode.value / 100);
    } else if (promoCode.type === "FLAT") {
        discount = promoCode.value;
    }

    if (promoCode.maxDiscount && discount > promoCode.maxDiscount) {
        discount = promoCode.maxDiscount;
    }

    return { ...order, discount, message: "Promo applied successfully" };
}

module.exports = { applyPromo };