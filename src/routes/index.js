//rutas
const {Router} = require ('express');
const router = Router();


router.get('/', (req, res) =>{
    //Dato
    const data = {"Titulo" : "Hola mundo"}

    //respuesta
    res.json(data);
});

module.exports = router;