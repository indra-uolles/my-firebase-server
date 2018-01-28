const express = require('express');
const router = express.Router();
const got = require('got');

router.post('/', function(req, res, next) {
    got('https://www.google.com/recaptcha/api/siteverify?secret=' + '6LfIxUEUAAAAAKfbgahQiPX31boA14xkcGXA8IP_' + '&response=' + req.body.captcha)
        .then(function(resp) {
            return res.send({ success: true });
            //res.send({ success: JSON.parse(resp.body).success });
            //return ({ success: JSON.parse(resp.body).success });
        })
        .catch(function(err){
            console.error(err);
            res.send(err, 500)
        });
});

module.exports = router;