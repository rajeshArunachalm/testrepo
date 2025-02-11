const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Superstar');
});

const PORT = 9443;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
