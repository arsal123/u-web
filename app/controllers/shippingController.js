'use strict'
const shipping = require('../services/shippingCalc');
const SHIPPING_CONTR = 'ShippingController: ';

exports.getRates = function (req, res) {
    
    console.log(SHIPPING_CONTR + 'START: ' + JSON.stringify(req.params));
    const weight = req.query.weight
    ,     postalCode = req.query.dcode;

    if(!weight || !postalCode){
        res.status(400).send({
            error: 'Invalid query params'
        });
    }

    shipping.getRates(weight, postalCode, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    })
    console.log(SHIPPING_CONTR + 'after call');
}