const express = require('express');
const {getAllSongs,getSingleSong,uploadSong,updateSong,deleteSong} = require('../controllers/song-controllers')
const router = express.Router();

//get all songs
//get a single song
//upload a song 
//update a song
//delete a song 

router.get('/get',getAllSongs);
router.get('/get/:id',getSingleSong);
router.post('/upload',uploadSong);
router.put('/update/:id',updateSong);
router.delete('/delete/:id',deleteSong);

module.exports = router;
