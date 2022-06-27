module.exports = function(app) {
    var userList = require('./controller')

    // Routes
    app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_user)

    app.route('/users/:userId')
    .get(userList.get_a_user)
    .put(userList.update_user)
    .delete(userList.delete_user)
};