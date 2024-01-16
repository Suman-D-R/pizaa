// getPizzas.controllers.js

const Pizza = require("../models/pizzas.model");

exports.getPizzas = async (req, res) => {
    try {
      const data = await Pizza.find({}).exec();
      res.status(200).json({
        code: 200,
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        code: 500,
        message: error.message,
      });
    }
};
