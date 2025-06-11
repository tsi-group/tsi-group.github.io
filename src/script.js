import fs from 'fs';

function randomAddress() {
  return '0x' + Math.random().toString(16).substr(2, 40).padEnd(40, '0');
}

/**
 * Generates a random transaction object with specified type.
 *
 * @param {string} type - The type of transaction ('buy' or 'sell').
 * @returns {Object} A transaction object containing:
 *   @property {number} id - Unique transaction identifier.
 *   @property {string} type - Transaction type ('buy' or 'sell').
 *   @property {string} from - Sender's address.
 *   @property {string} to - Recipient's address.
 *   @property {string} amount - Transaction amount in ETH (as a string with 4 decimal places).
 *   @property {number} timestamp - Unix timestamp of the transaction.
 */
function randomTransaction(type) {
  return {
    id: Math.floor(Math.random() * 1e12),
    type: type, // 'buy' or 'sell'
    from: randomAddress(),
    to: randomAddress(),
    amount: (Math.random() * 10).toFixed(4), // ETH
    timestamp: Date.now() - Math.floor(Math.random() * 1e7)
  };
}

const transactions = [];
const total = 1000; // Number of transactions

for (let i = 0; i < total; i++) {
  const type = Math.random() > 0.5 ? 'compra' : 'venta'; // Randomly choose 'buy' or 'sell'
  transactions.push(randomTransaction(type));
}

fs.writeFileSync('data/transactions.json', JSON.stringify(transactions, null, 2));
console.log(`Generated ${total} dummy transactions in data/transactions.json`);