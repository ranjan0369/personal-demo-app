const express = require('express');
const pool = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());
app.use('/api', authRoutes);

app.locals.db = pool;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
