'use strict';

const Controller = require('../controllers/controller');

module.exports = (app) => {

    let controller = new Controller();

    app.route('/api/hello')
        .get((req, res) => res.json({ 'message': 'Hello from server!' }))

}