const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Add a new transaction
router.post("/", async (req, res) => {
    try {
        const { type, amount, category } = req.body;
        const transaction = new Transaction({ type, amount, category });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all transactions
router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
