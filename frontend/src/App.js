import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login"; // Adjust the path if necessary
import Signup from "./pages/Signup"; // Import Signup component
import SellerDashboard from "./pages/SellerDashboard.js";
import BuyerDashboard from "./pages/BuyerDashboard.js"; // Import BuyerDashboard
import AdminDashboard from "./pages/AdminDashboard.js";
import RouteGuard from "./components/RouteGuard.js";
import BuyerMyListings from "./pages/BuyerMyListings.js";
import ProductListingForm from "./pages/ProductListingForm.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}

        {/* Protected routes */}
        <Route
          path="/seller-dashboard"
          element={
            <RouteGuard>
              <SellerDashboard /> {/* Protected Seller Dashboard */}
            </RouteGuard>
          }
        />
        <Route
          path="/listing-form"
          element={
            <RouteGuard>
              <ProductListingForm /> {/* Protected Listing Form */}
            </RouteGuard>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <RouteGuard>
              <AdminDashboard /> {/* Protected Admin Dashboard */}
            </RouteGuard>
          }
        />
        <Route
          path="/buyer-dashboard"
          element={
            <RouteGuard>
              <BuyerDashboard /> {/* Protected Buyer Dashboard */}
            </RouteGuard>
          }
        />

        <Route
          path="/my-listings"
          element={
            <RouteGuard>
              <BuyerMyListings /> {/* Protected Buyer Dashboard */}
            </RouteGuard>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
