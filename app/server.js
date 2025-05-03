const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Received request at /');
    res.send('Hello from Node.js app in Kubernetes!');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
