const express = require('express');
const router = express.Router;

//show all orders
router.get("/all", async (req, res) => {
    let sql = "SELECT delivery_date FROM d_order";

    await db.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data);
        console.log(data[0].delivery_date.toLocaleDateString());
    });
});

//show specific order
router.get("/", ((req, res) => {
    const id = req.query.id;
    let sql = `SELECT * FROM d_order WHERE order_id = ${id}`
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data);
        res.status(200).json(data);


    });
}));

//place order
router.post("/place", async (req, res) => {

    try {
        const {d_caterer_id, d_customer_customer_id, amount, delivery_time, order_place_time, delivery_date} = req.body;


        let sql = "INSERT INTO d_order SET ?";


        await db.query(sql, {
            d_caterer_id,
            d_customer_customer_id,
            amount,
            delivery_time,
            order_place_time,
            delivery_date
        }, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.status(200).json('Success')
        })
        res.status(200).json('Order has been placed Successfully');
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