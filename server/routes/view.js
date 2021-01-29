'use strict';

const express = require('express');
const path = require('path');

module.exports = (app) => {

    if (process.env.VIEW_POINT === 'client') {
        app.use(express.static(path.join(__dirname, '../../client/build/')));

        app.route('/')
            .get((req, res) => {
                res.sendFile(path.join(__dirname, '../../client/build/index.html'));
            });
    } else if (process.env.VIEW_POINT === 'server') {
        app.use(express.static(path.join(__dirname, '../public')));

        app.route('/')
            .get((req, res) => {
                res.sendFile(path.join(__dirname, '../public/index.html'));
            });
    } else {
        app.route('/')
            .get((req, res) => res.send('Hello, You forgot setup VIEW_POINT env variable to "server" or "client" !'));
    }

    app.use((req, res) => {
        res.status(404);
        res.send('Not Found');
    });
}