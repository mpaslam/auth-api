const Customer = require('../../model/customer');

async function createCustomer(req, res) {
    const { name, email, phone, address } = req.body;
    const userId = req.user._id; // Assuming user authentication middleware attaches `req.user`

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
        const newCustomer = new Customer({
            name,
            email,
            phone,
            address,
            createdBy: userId
        });

        await newCustomer.save();
        res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create customer', details: err.message });
    }
}

module.exports = { createCustomer };
