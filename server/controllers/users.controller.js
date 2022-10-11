const User = require('../models/user.model');

module.exports.findUserWithEmailPassword = (req, res) => {
    if (res.body.email == '' || res.body.password == '') {
        res.json({ message: 'Cannot retrieve user data.', error: err});
    }

	User.findOne({ 
        email: req.body.email,
        password: req.body.password
    })
    .then((user) => {
        let data = {
            _id: user._id,
            name: user.name ?? '',
            email: user.email,
            role: user.role
        };

        res.json({ user: data })
    })
    .catch((err) => {
        res.json({ message: 'Cannot retrieve user data.', error: err});
    });
}