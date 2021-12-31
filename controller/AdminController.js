const User = require('../models/User');
const jwt = require('jsonwebtoken');

class AdminController {

    // Authen
    authentication(req, res, next) {
        // decode
        const decodeJWT = (token) => {
            try {
                return jwt.decode(token);
            } catch (err) {
                console.log(err.message);
                return null;
            }
        };

        const headers = req.headers;
        const token = headers['authorization'];
        const data = decodeJWT(token);

        if (!data) {
            res.send('loi!!!')
        };

        req.user = data;
        next();
    }

    // List user [GET] /users
    show(req, res, next) {
        const role = req.user.role;
        User.find({})
            .then((users) => {
                if (role !== 'Admin') {
                    res.send('Chỉ có quyền admin mới có thể truy cập!');
                } else {
                    res.json(users);
                }
            })
            .catch(next)
    }

    // Show info profile [GET] /users/:id
    showInfo(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((user) => {
                if (user) {
                    res.json(user);
                }
            })
            .catch((err) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            })
    }

    // Create user [POST] /users/create
    createUser(req, res, next) {
        const formData = req.body;
        User.create(formData)
            .then((user) => {
                res.json(user);
            })
            .catch(next)
    }


    // Update user [PUT] /users/:id
    updateUser(req, res, next) {
        const formData = req.body;
        User.updateOne({ _id: req.params.id }, formData)
            .then(() => res.send('ok'))
            .catch(next)
    }

    // Delete  user [DELETE] /users/:id
    deleteUser(req, res, next) {
        const role = req.user.role;
        User.deleteOne({ _id: req.params.id })
            .then((user) => {
                if (role !== 'Admin') {
                    res.send('loi!!!');
                } else {
                    res.send('ok');
                }
            })
            .catch(err => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
            })

    }

}

module.exports = new AdminController;