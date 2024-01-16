const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            type: String,
        },
    ],
    topping: [
        {
            type: String,
        },
    ],
});

const PizzaModel = mongoose.model("Pizza", pizzaSchema); 

module.exports = PizzaModel;