const ProductListing = require('../models/ProductListing');

exports.getAllProductListings = async(req,res) => {
    try {
        
        const products = await ProductListing.find({isActive:1});
        // Check if products were found
        if (products.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No product listings found in the database.',
            });
        }
        // Send a success response with the products
        return res.status(200).json({
            success: true,
            message: 'Product listings fetched successfully.',
            data: products,
        });

    } catch (error) {
        console.error('Error fetching all product listings:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while fetching product listings.',
        });
    }
};

exports.getUpdateProductListings = async (req, res) => {
    const { itemIds, newStatus } = req.body;
    console.log(newStatus)
    // Check if itemIds and newStatus are provided
    if (!itemIds || !newStatus) {
        return res.status(400).json({
            success: false,
            message: "Please provide both itemIds and newStatus in the request body.",
        });
    }

    try {
        // Update the status of all listings with matching itemIds
        const updateResult = await ProductListing.updateMany(
            { _id: { $in: itemIds } }, // Match listings by itemIds
            { status: newStatus }      // Set the new status
        );

        // Check if any listings were updated
        if (updateResult.nModified === 0) {
            return res.status(404).json({
                success: false,
                message: "No listings were updated. Please check the itemIds.",
            });
        }

        return res.status(200).json({
            success: true,
            message: `Listings updated to ${newStatus} successfully.`,
        });

    } catch (error) {
        console.error("Error updating product listings:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while updating product listings.",
        });
    }
};