/**
 * @project E-Commerce Backend with Stripe Integration & Frontend UI
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const paymentRoutes = require('./src/routes/paymentRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Serve Static Frontend UI
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`E-Commerce Store & Stripe Backend running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});