const express = require('express');
const router = require('../routes/index');
const app = express();
const port = process.env.PORT || 3000;

app.use(router);


app.listen(port, function () {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

