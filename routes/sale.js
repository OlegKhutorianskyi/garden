const { request } = require('express');
const express = require('express');

const router = express.Router();


router.get('/send', (req, res) =>{
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
            let word = ''

            for (let i = 0; i < 15; i++) {
                word += letters.charAt(Math.floor(Math.random() * letters.length))
            }

            this.randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5)
            
            word = this.randomKey.toUpperCase()
            
            return res.json({cupon: word});
        

})

router.post('/send', (req, res) => {
    
    res.json({status: 'OK', message: 'request processed'})
})


module.exports = router;