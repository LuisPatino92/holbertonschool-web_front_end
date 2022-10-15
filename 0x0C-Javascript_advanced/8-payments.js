function processPayment(amount) {
  console.log(`Collecting payment of ${amount}`);
}

function pOrder(orderId, amount) {
  console.log(`${orderId} is being processed`);
  processPayment(amount);
  console.log(`${orderId} has been fully processed`);
}

console.log("Processing orders");

pOrder(12321, 10.99);
pOrder(12322, 12.99);
pOrder(12323, 15.0);

console.log("All the orders have been processed");
