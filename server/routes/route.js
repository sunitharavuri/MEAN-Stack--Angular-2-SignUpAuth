const express = require('express');
const router = express.Router();
const Challenge = require('../models/challenges');
const dateFormat = require('date-format');
const multer = require('multer');

var fs = require('fs');



 

router.get('/challenges', (req, res, next) => {
    var query=req.query;
    Challenge.find(query,function (err, challenges) {
     res.json(challenges);

    })

});
router.delete('/challenges', (req, res, next) => {
    Challenge.remove(function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })


});
router.get('/challenge/:id', (req, res, next) => {
    Challenge.findOne({ _id: req.params.id }, function (err, challenge) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(challenge);
        }

    })

});


router.post('/challenge', (req, res, next) => {
    let newChallenge = new Challenge({
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        image:req.body.image
        
    });
    newChallenge.save((err, challenge) => {
        if (err) {
            res.json({ msg: 'failed to add challenge' });
        }
        else {
            res.json({ msg: 'challenge added succesfully' });
        }

    })

});

router.delete('/challenge/:id', (req, res, next) => {
    Challenge.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })


});
router.post('/challenge/:id',(req,res,next)=>{
    Challenge.findOne({_id:req.params.id},function(err,challenge){
        var challenges=challenge;
        challenges.name=req.body.name;
        challenges.description = req.body.description;
        challenges.priority = req.body.priority;
        challenges.start_date = req.body.start_date;
        challenges.end_date = req.body.end_date;
        challenges.image=req.body.image;

        challenges.save((err, challenge) => {
            if (err) {
                res.json({ msg: 'failed to edit challenge' });
            }
            else {
                res.json({ msg: 'challenge edited succesfully' });
            }
        })
    })
});
// router.post('/challenge/image', function (req, res) {
//     var newChallenge = new Challenge();
//     newChallenge.img.data = fs.readFileSync(req.files.userImage.path)
//     newChallenge.img.contentType = 'image / png';
//     newChallenge.save();
// });

// router.post('/challenge', upload.any(), (req, res) => {
//     res.json(req.files.map(file => {
//         let ext = path.extname(file.originalname);
//         return {
//             originalName: file.originalname,
//             filename: file.filename
//         }
//     }));
// });




module.exports = router;
