'use strict';

const express = require('express');
const path = require('path');

module.exports = (app) => {

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname + '/client/build/')));

        app.route('/')
            .get((req, res) => {
                res.sendFile(path.join(__dirname + '/client/build/index.html'));
            });
    } else {
        app.route('/')
            .get((req, res) => {
                res.send('Server is listening!');
            });
    }

    app.use((req, res) => {
        res.status(404);
        res.send('Not Found');
    });
}