const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); 
app.use(cors());

const port = 3000;

const routes = require('./routes');

app.use('/', routes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
