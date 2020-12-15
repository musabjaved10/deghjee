const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');               //Importing the NPM bcrypt package.


router.post('/register', async (req, res) => {
    try {
        const {ca_name, passwd} = req.body;

        if (!ca_name || !passwd) {
            res.send('Data cant be empty')
        }


        const ca_passwd = await bcrypt.hash(passwd, 10);
        let sql = "INSERT INTO d_caterer SET ?";


        await db.query(sql, {ca_name, ca_passwd}, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.status(200).json('Success')
        })
        res.status(200).json('All good!');
    } catch (e) {
        // console.log(e); // Uncomment if needed for debug
        // If a SQLITE_CONSTRAINT has been violated aka. row with that email already exists. You can read more: https://www.sqlite.org/c3ref/c_abort.html
        if (e.errno === 19) {
            res.status(400).json('A user with that email already exists!');
        } else {
            res.status(400).json('Something broke!');
        }
    }
});

router.get('/compare', async (req, res) => {
    var sql = 'SELECT ca_passwd FROM d_caterer WHERE d_caterer_id = 7';

    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        const get_pass = data[0].ca_passwd;
        bcrypt.compare("newpass", get_pass, function (error, response) {
            // response == true if they match
            // response == false if password is wrong

            console.log("password matches ?:" + response);
        });


    });

    // const pass = "musab123";

    // });

})

module.exports = router;