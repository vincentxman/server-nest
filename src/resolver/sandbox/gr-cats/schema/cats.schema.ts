import * as mongoose from 'mongoose';
// mongoose.set('useFindAndModify', false)

export const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    creationDate : { type: Date, required: true, default: Date.now },
});
