//MODULE BY FELIPE MARTINEZ SALINAS
//FOR API REST

// FRASES DE LA SERIE "ONE PIECE"

let frases = [
    "Olvidar es como una herida. La herida puede sanar pero deja una cicatriz.",
    "Estar solo es más doloroso que salir herido.",
    "El poder no se determina por tu tamaño, ¡sino por el tamaño de tu corazón y tus sueños!",
    "Entonces sé más fuerte. Tengo mi ambición y tú también. Lo que significa que solo debes seguir caminando hacia esa meta.",
    "Si no arriesgas tu vida, no puedes crear un futuro."
]

function getQuote(i){
    return frases(i)
}

module.exports.getQuote = getQuote;



