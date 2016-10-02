// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment:  {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
// create a schema
var destSchema = new Schema({
    puesto_numero: {
        type: Number,
        required: true,
        unique: true
    },
    centro_directivo: {
        type: String,
        required: true
    },
    centro_destino: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    puesto_trabajo: {
        type: String,
        required: true
    },
    nivel: {
        type: Number,
        required: true
    },
    comp_especifico: {
        type: String,
        required: true
    },
    comp_productividad: {
        type: String,
    },
    direccion: {
        type: String,
    },
    telefono: {
        type: String,
    },
    horario_flexibilidad: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    transporte_publico: {
        type: String,
    },
    aparcamiento: {
        type: String,
    },
    ayudas_estudios: {
        type: String,
    },
    ayudas_cuerpos_superiores: {
        type: String,
    },
    concilacion: {
        type: String,
    },
    accion_social: {
        type: String,
    },
    comedor: {
        type: String,
    },
    ducha: {
        type: String,
    },
    promocion: {
        type: String,
    },
    externos: {
        type: String,
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Destinos = mongoose.model('Destino', destSchema);

// make this available to our Node applications
module.exports = Destinos;