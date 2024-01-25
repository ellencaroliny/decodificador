
let img = document.getElementById('imagem');
let h1 = document.querySelector('h1');
let p = document.getElementById('text')
let input = document.getElementById('caixa-de-texto');
let p2 = document.getElementById('result');
let botaoCripto = document.getElementById('cripto');
let botaoDecripto = document.getElementById('decripto');
let ctrlC = document.getElementById('ctrlc');

let chaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

let chavesInversas = {};
for (let chave in chaves) {
    chavesInversas[chaves[chave]] = chave;
}

function criptografar(texto) {
    let textoCriptografado = texto;
    for (let chave in chaves) {
        let regex = new RegExp(chave, 'g');
        textoCriptografado = textoCriptografado.replace(regex, chaves[chave]);
    }
    return textoCriptografado;
}

function descriptografar(textoCriptografado) {
    let texto = textoCriptografado;
    for (let chave in chavesInversas) {
        let regex = new RegExp(chave, 'g');
        texto = texto.replace(regex, chavesInversas[chave]);
    }
    return texto;
}

botaoCripto.addEventListener('click', function() {
    let texto = input.value;
    let textoCriptografado = criptografar(texto);
    p2.textContent = textoCriptografado;
    img.style.display = 'none';
    h1.style.display = 'none';
    p.style.display = 'none';
    ctrlC.style.display = 'block';
});

botaoDecripto.addEventListener('click', function() {
    let textoCriptografado = input.value;
    let texto = descriptografar(textoCriptografado);
    p2.textContent = texto;
    img.style.display = 'none';
    h1.style.display = 'none';
    p.style.display = 'none';
    ctrlC.style.display = 'block';
});

ctrlC.addEventListener('click', function() {
    navigator.clipboard.writeText(p2.textContent).then(function() {
        console.log('Texto copiado para a área de transferência!');
        ctrlC.textContent = 'Copiado!'; 
        
        setTimeout(function() {
            ctrlC.textContent = 'Copiar';
        }, 1000);
    }).catch(function(error) {
        console.error('Erro ao copiar texto: ', error);
    });
});

