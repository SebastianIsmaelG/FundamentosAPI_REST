const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req,res)=>{
    //async await
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await respuesta.json();
    res.json(users);
    
});
module.exports = router;