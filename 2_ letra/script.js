function verificarA(string) {

    let cont = 0;

    for(let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === 'a'){
            cont++;
        }
    }

    if (cont > 0) {
        return `A letra (a) ocorre ${cont} vezes na string`;
    } else {
        return `A letra (a) não ocorre na string`;
    }
}

function CverificarA() {
    let string = document.getElementById('str').value;
    let result = verificarA(string)
    document.getElementById('result').innerText = result;
}