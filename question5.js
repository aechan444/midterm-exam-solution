const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

// Database connection if ever naa 
const sequelize = new Sequelize('CJRDATABASE', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define User model
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING
}, {
    tableName: 'users',
    timestamps: false
});

// Fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected! Server running on port', port);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
});