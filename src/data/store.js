/**
 * @project E-Commerce Backend with Stripe Integration
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const products = [
  { id: 1, name: 'FastekDot Pro Smartwatch', price: 15000, currency: 'pkr', stock: 10 },
  { id: 2, name: 'Wireless Noise-Cancelling Earbuds', price: 8500, currency: 'pkr', stock: 25 },
  { id: 3, name: 'Ergonomic Mechanical Keyboard', price: 12000, currency: 'pkr', stock: 15 }
];

const orders = [];

module.exports = { products, orders };