const express = require("express");
const router = express.Router();
const getPizzasController = require("../controllers/getPizzas.controllers");

// Define your routes here
router.get("/", getPizzasController.getPizzas); // Corrected route definition

router.get("/users", (req, res) => {
    // Logic to fetch users from the database or another source
    res.json({ users: ["user1", "user2", "user3"] });
});

router.post("/users", (req, res) => {
    // Logic to create a new user
    const newUser = req.body;
    // Save the user to the database or another source
    res.json({ message: "User created successfully", user: newUser });
});

// More routes can be added based on your application's needs

module.exports = router;
