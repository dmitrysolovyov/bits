const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName} ...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateRequest()) {
                console.warn(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`[ERROR]: ${itemName} are unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};
// This is a function that returns true 80% of the time, simulatin a request to distributor
function simulateRequest() {
    return (Math.random() > .2);
}
const onFulfill = (itemsArray) => {
    console.warn(`Items checked: ${itemsArray}. Every item was available from the distributor. Placing order now.`);
    alert(`Every item was available from the distributor. Placing order now.`);
};
const onReject = (rejectionReason) => {
    alert(rejectionReason);
};

const checkShirts = checkAvailability('shirts', 'Example Distributor Co.');
const checkBags = checkAvailability('bags', 'Example Distributor Co.');
const checkHats = checkAvailability('hats', 'Example Distributor Co.');

Promise.all([checkShirts, checkBags, checkHats])
    .then(onFulfill)
    .catch(onReject);
