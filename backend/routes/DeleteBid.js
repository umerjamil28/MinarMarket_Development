const express = require('express');
const Bid = require('../models/BuyerBids'); // Assuming you have a Bid model

const router = express.Router();

// Route to remove  a new bid
router.delete('/remove', async (req, res) => {
    const { userId, itemId, bidAmount } = req.body;

    if (!userId || !itemId || !bidAmount) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBid = new Bid({
            userId,
            itemId,
            bidAmount,
            bidTime: new Date()
        });

        await newBid.save();
        res.status(201).json({ message: 'Bid added successfully', bid: newBid });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});



module.exports = router;