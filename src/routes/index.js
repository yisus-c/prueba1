const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', { title: 'PEAM'});
});

router.get('/contact', (req, res) =>{
    res.render('contact.html', { title: 'Contact Page'});
});
router.get('/ventas', (req, res) =>{
    res.render('ventas.html', { title: 'Ventas'});
});

module.exports = router;