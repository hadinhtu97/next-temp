'use strict';

require("dotenv").config();
const express = require("express");
const app = express();

const middleware = require('./routes/middleware')
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/view');

// Routes below
middleware(app);

apiRoutes(app);

viewRoutes(app);
// Routes above 


app.listen(process.env.PORT || 5000, () => {
    console.log('Your app is listening on port ' + process.env.PORT);
})