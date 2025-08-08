const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello My name eswara parasad. I am a full stack developer');
});

app.listen(port, () => {
    console.log(`server is running http://127.0.01:${port}`);
}  
); 