const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hello');
    next();
});

app.get('/', (req, res) => {
    const user = {
        name: 'sally',
        age: 20
    }
    res.send(user)
})

app.listen(3000);