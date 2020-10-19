const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    Arrendadora: {
        type: String,
        required: true,
    },
    Ubicación: {
        type: String,
        required: true,
    },
    Marca: {
        type: String,
        required: true,
    },
    Modelo: {
        type: String,
        required: true,
    },
    Año: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Posts', PostSchema);