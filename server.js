const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/submit-order', (req, res) => {
});

app.get('/confirmation', (req, res) => {
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
