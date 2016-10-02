var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var states = 'opening open closing closed'.split(' ');

var User = new Schema({
    username: String,
    password: String,
    firstname: {
      type: String,
      required : true,
      enum : ["Daniel", "David", "Abel", "Francisco Javier", "Juan", "Manuel", "Gregorio Oscar", "Jose Manuel", "Manuel Yago", "Alberto", "Marcos Antonio", "Gustavo Jose", "Manuel", "Carlos", "Ricardo", "Roberto", "Vicente Javier", "Iago", "Javier", "Alvaro", "Ana Isabel", "Fernando", "Jorge", "Antonio", "Virginia", "Monica", "Arturo", "Felix Javier", "Borja Jose", "Marcos", "Alejandro", "Vicente", "Ignacio", "Cesar", "Valeriano", "Alejandro Miguel", "Pedro Angel Del", "Julio Crispin", "Rocio", "Marina", "Jose Miguel", "Miguel Angel", "Sergio", "Hector", "Victor", "Juan Manuel", "Diego", "Jose David", "Susana", "Antonio", "Abel", "Jesus", "Alvaro Miguel", "Carmen", "Jorge", "Jose Ignacio", "Alfredo", "Mario", "Rafael", "Federico David", "Maria Dolores", "Marcin", "M Vicenta", "Raquel", "Adrian", "Cayetano", "Roberto Carlos", "Jesus", "Miguel Angel", "Andres", "Sergio De La", "Pedro Jose", "Jesus", "Miguel", "Jose Emilio", "destinator"]

    },
    lastname: {
      type: String,
      required : true,
      enum : ["Palomo", "Plaza", "Aranda", "Arcas", "Rodriguez De Vera", "Moran", "Perez", "Oseguera", "Hernando", "Blanco", "Lopez", "Solana", "Martin-Nieto", "Castro", "Cofrade", "Rebollar", "Iglesias", "Vico", "Blazquez", "Las Heras", "Da Cuña", "Pescador", "Terron", "Lamela", "Lobato", "Marnez", "Garcia", "Manchado", "Gomez", "Moreno", "Romero", "Romeral", "Cabello", "Morante", "Rubio", "Vergara", "Mulero", "Niñerola", "Serrano", "Cuadros", "Arriaga", "Moral", "Martinez", "Ortega", "Manteca", "Lopez", "Ramirez", "Baneira", "Gutierrez", "Reyes", "Avila", "Garrote", "Rincon", "Motos", "Poyatos", "Iñiguez", "Lamas", "Lomo", "Ramos", "Rodriguez", "Delgado", "Villar", "Gonzalez", "Escobar", "Monedero", "Soto", "Senovilla", "Gallardo", "Osa", "Herranz", "Rybarczyk", "Perez", "Lopez", "Sanchez", "Duque", "Ortiz", "Rojas", "Clavero", "Huertas", "Cruz", "Eisman", "Caraballo", "destinator"]

    },
    admin:   {
        type: Boolean,
        default: false
    }
});

User.methods.getName = function() {
    return (this.firstname + ' ' + this.lastname);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);