import express from 'express';
import cors from "cors"
const app = express();
app.use(cors())
import { Users } from './users.js';
const PORT = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
    res.json(Users)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});