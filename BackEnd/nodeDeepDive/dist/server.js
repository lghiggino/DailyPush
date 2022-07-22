"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/courses/:id', (req, res) => {
    const { id } = req.params;
    console.log(`bateu em /courses/${id}`);
    res.send('teste').status(200);
});
const PORT = process.env.PORT || 3333;
console.log(`Server running on Port: ${PORT}`);
app.listen(PORT);
