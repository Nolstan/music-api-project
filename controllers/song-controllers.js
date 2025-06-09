//get all songs
//get a single song
//upload a song 
//update a song
//delete a song 
const Music = require('../model/mongo-server-model');

const getAllSongs = async(req,res) =>{
    try{
        const getAllsongsInDatabase =await Music.find({});

        if(getAllsongsInDatabase.length > 0){
             res.status(200).json({
                success: true,
                message:"List of All song in your Database",
                data: getAllsongsInDatabase
             })
        }else{
                res.status(500).json({
                success: false,
                message:"You dont have any songs in your Database",
                data: 0
             })
        }
    
    }catch(e){
        console.log(`Error===>${e}`);
        res.status(404).json({
            success: false,
            message:'Something went wrong check your console'
        })
    }
}


const getSingleSong = async(req,res) =>{
    try{
        const getIdOfTargetedSong = req.params.id;
        const findTheSong =await Music.findById(getIdOfTargetedSong);

        if(findTheSong){
                res.status(200).json({
                success: true,
                message:`The song of Id ${getIdOfTargetedSong}`,
                data: findTheSong
             })
        }else{
                res.status(404).json({
                success: false,
                message:`No such song of Id ${getIdOfTargetedSong}`,
             }) 
        }

    }catch(e){
        console.log(`Error===>${e}`);
        res.status(404).json({
            success: false,
            message:'Something went wrong check your console'
        })
    }
}
const uploadSong = async(req,res) =>{
    try{


    const newSongForm = req.body;
    const newCreatedSong = await Music.create(newSongForm);

    if(newCreatedSong){
        res.status(200).json({
            success: true,
            message:'New song added details below',
            data: newCreatedSong
        })
    }else{
            res.status(500).json({
            success: false,
            message:'failed to Uplaod the song',
        })
    }


    }catch(e){
        console.log(`Error===>${e}`);
        res.status(404).json({
            success: false,
            message:'Something went wrong check your console'
        })
    }
}


const updateSong = async(req,res) =>{
    try{
              const updateSong = req.body;
              const getTargetedSongID = req.params.id;
        
              const updatedSong = await Music.findByIdAndUpdate(getTargetedSongID, updateSong, { new: true });
              //{new :true} ,returns the updated info ,mongoose return old document by default.
        
              res.status(200).json({
                 success: true,
                 message: `Congrats! song with ID ${getTargetedSongID} is updated`,
                 data: updatedSong
              });
        
        
    }catch(e){
        console.log(`Error===>${e}`);
        res.status(404).json({
            success: false,
            message:'Something went wrong check your console'
        })
    }
}


const deleteSong = async(req,res) =>{
    try{

        const getIdOfTargetedSong = req.params.id;
        const findTheSong =await Music.findByIdAndDelete(getIdOfTargetedSong);

        if(findTheSong){
                res.status(200).json({
                success: true,
                message:`The song of Id ${getIdOfTargetedSong} is deleted, below were the songs details`,
                data: findTheSong
             })

        }else{
                res.status(404).json({
                success: false,
                message:`No such song of Id ${getIdOfTargetedSong}`,
             }) 
        }

    }catch(e){
        console.log(`Error===>${e}`);
        res.status(404).json({
            success: false,
            message:'Something went wrong check your console'
        })
    }
}


module.exports = {getAllSongs,getSingleSong,uploadSong,updateSong,deleteSong};