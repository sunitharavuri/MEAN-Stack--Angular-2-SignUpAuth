const mongoose = require('mongoose');
const dateFormat = require('date-format');
var Schema = mongoose.Schema;


const ChallengeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    priority: {
        type: String,
        required: true

    },
    start_date: {
        type: Date,
        required: true,
       
    },
    end_date: {
        type: Date,
        // required: true,
        default: Date.now
        
    },
    image:{ 
        data: Buffer, 
        contentType: String 
    }
  
    
});
// ChallengeSchema.pre('save', function (next) {
//     now = new Date();
//     if (!this.createdAt) {
//         this.createdAt = now;
//     }
//     next();
// });

const Challenge = module.exports = mongoose.model('challenge', ChallengeSchema);



