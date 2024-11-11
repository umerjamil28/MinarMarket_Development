// SellerListingRoutes.js (Backend)
const express = require('express');
const router = express.Router();
const { deactivateListings } = require('../controllers/SellerListingController');

// DELETE route to handle deletion of seller listings by item IDs
router.delete('/deactivate-listings', deactivateListings);

module.exports = router;