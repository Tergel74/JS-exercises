'use strict';

var data = require('../../users.json')
const fs = require('fs')

exports.list_all_users = function(req, res) {
    res.json(data)
}

exports.create_user = function(req, res) {
    var user = req.body;
    fs.writeFileSync('../users.json',JSON.stringify(user, null, 2) )
}
