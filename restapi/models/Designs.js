const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const designsSchema = new Schema({

    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    creator: {
        type: ObjectId,
        ref: "User"
    }

  });

module.exports = new Model('Designs', designsSchema);