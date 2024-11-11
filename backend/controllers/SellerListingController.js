const ProductListing = require('../models/ProductListing'); // Import the ProductListing model

// Controller to handle fetching product listings by user ID
exports.getSellerListings = async (req, res) => {
    try {
        const { userId } = req.query;

        // Validate that userId is provided
        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'User ID is required to fetch seller listings.',
            });
        }

        // Fetch products with listerId matching userId
        const products = await ProductListing.find({ listerId: userId, isActive: 1 });

        // Check if products were found
        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No listings found for this user.',
            });
        }

        // Send a success response with the products
        return res.status(200).json({
            success: true,
            message: 'Seller listings fetched successfully.',
            data: products,
        });
    } catch (error) {
        console.error('Error fetching seller listings:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while fetching seller listings.',
        });
    }
};