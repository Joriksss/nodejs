var express = require('express');
var router = express.Router();

let movie = [
    {id: 1, director: 'James Cameron', title: 'Avatar'},
    {id: 2, director: 'German Svista', title: '1945'},
    {id: 3, director: 'Bobby Singer', title: 'Supernatural'}
]

router.get('/', (req, res) => {
    res.json(movie)
});

router.get('/:id', (req, res) => {
    const filmID = parseInt(req.params.id, 10)
    const film = movie.find(film => film.id === filmID)

    if(film) {
        return res.json(film)
    };
    
    return res.status (404).json({
        status: 'undefind'
    })
})

module.exports = router;
