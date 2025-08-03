// Calculates estimated delivery time based on distance, traffic, and driver availability
function calculateETA(order) {
    if (!order.distanceKm || order.distanceKm <= 0) {
        throw new Error("Invalid distance for ETA calculation");
    }

    const baseTime = order.distanceKm * 4; 
    const trafficFactor = order.trafficLevel === "HEAVY" ? 1.5 : 1.0;
    const driverDelay = order.driverAvailable ? 0 : 10;

    const eta = Math.ceil(baseTime * trafficFactor + driverDelay);
    return { ...order, etaMinutes: eta };
}

module.exports = { calculateETA };