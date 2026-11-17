/**
 * @project E-Commerce Backend with Stripe Integration
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const { products, orders } = require('../data/store');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy');

const router = express.Router();

// Multer Storage Configuration for Product Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Get All Products
router.get('/products', (req, res) => {
  res.status(200).json({ success: true, count: products.length, data: products });
});

// Create Stripe Checkout Session for Payment
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = products.find((p) => p.id === productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    // Simulated Checkout Response for portfolio/testing without live keys
    const mockSessionId = 'cs_test_' + Math.random().toString(36).substring(7);
    
    orders.push({
      orderId: 'ORD-' + Date.now(),
      productId: product.id,
      productName: product.name,
      amount: product.price * (quantity || 1),
      status: 'Pending Payment',
      sessionId: mockSessionId,
      createdAt: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Stripe Checkout Session created successfully.',
      sessionId: mockSessionId,
      checkoutUrl: `https://checkout.stripe.com/pay/${mockSessionId}`
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload Product Image (Admin feature)
router.post('/upload-product-image', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No image file uploaded.' });
  }

  res.status(201).json({
    success: true,
    message: 'Product image uploaded successfully.',
    filePath: `/uploads/${req.file.filename}`
  });
});

module.exports = router;