const {Router} = require('express');
const router = Router();
const _ = require('underscore');



const movies = require("../sample.json");
//Peticion de movies-> requiere el sample.json .get!
router.get('/', (req,res)=>{
    res.json(movies);
})

//post
router.post('/', (req,res)=>{
    //obtengo los datos y se comprueban
    const {titulo,director,año,calificacion}=req.body;
    if(titulo && director && año && calificacion){
        res.json('Guardado');
        //Guardamos al json
        const id = movies.length +1;
        const nueva_pelicula = {...req.body, id};
        //Guarda al servidor
        movies.push(nueva_pelicula);
        res.json(movies);
    }else{
        res.json('Wrong request');
    }
});
// put
router.put('/:id', (req,res)=>{
    const {id}= req.params;
    const {titulo,director,año,calificacion}=req.body;
    if(titulo && director && año && calificacion){
        _.each(movies, (movie,i)=>{
            if(movie.id==id){
                movie.titulo = titulo;
                movie.director = director;
                movie.año = año;
                movie.calificacion = calificacion;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({error: "ocurrio un error"})
    }

});




//Delete 
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    _.each(movies, (movie, i )=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
});

module.exports = router;