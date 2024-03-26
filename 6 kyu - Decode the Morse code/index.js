const alphabet_e = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":",",
    "...---...":"SOS" // Added Morse code for "SOS"
}

const decodeMorse = function(morseCode){
    const words = morseCode.split('  ');
    const letters = words.map((w) => w.split(' '));
    const resp = [];
    
    for(let i = 0; i < letters.length; i++){
        resp[i] = [];
        for(let j = 0; j < letters[i].length; j++){
            if(alphabet_e[letters[i][j]]){
                resp[i].push(alphabet_e[letters[i][j]].toUpperCase());
            }
        }
    }
    const resposta =  resp.map(arr => arr.join('')).join(' ');
    return resposta.trim();
}