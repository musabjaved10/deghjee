const express = require('express');
const router = express.Router;

//hardcoded cuisines
router.post('/', async (req, res) => {
    try {
        const {d_caterer_id, d_category_category_id, p_name, p_description} = req.body;

        if (!p_name || !p_description) {
            res.send('Data cant be empty')
        }

        let sql = "INSERT INTO d_product SET ?";


        await db.query(sql, {d_caterer_id, d_category_category_id, p_name, p_description}, (err, result) => {
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

//Different
router.post('/biryani', async (req, res) => {
    try {
        const {d_caterer_id, p_name, p_description} = req.body;

        if (!p_name || !p_description) {
            res.send('Data cant be empty')
        }

        let sql = "INSERT INTO d_product SET ?, d_category_category_id = (SELECT category_id FROM d_category WHERE ct_name = 'Biryani') ";

        await db.query(sql, {d_caterer_id, p_name, p_description}, (err, result) => {
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


module.exports = router;